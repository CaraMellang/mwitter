import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
    // 이친구는 클라이언트단에서 url을 변경한 것 "처럼"보이게함
    // window.location.replace("/"); //따라서 리프레쉬하는 이걸사용
    refreshUser(); //상태를 업데이트 함으로 컨포넌트 리렌더링
  };
  const getMyMweets = async () => {
    const mweets = await dbService
      .collection("mweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt")
      .get();
    //where은 데이터를 필터링해서 get()으로 데이터를 가져옴
    //orderBy는 firebase가 nosql기반이라 인덱스를 만들고 작동해야함(쿼리를 실행할수 있도록)
    console.log(mweets.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyMweets();
  }, []);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        //updeteProfile은 displayname이랑 photoUrl만 바꿀수있음
        //(다른것도 쓰려면 다른 메소드 써야함)
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          type="text"
          placeholder="Display name"
          onChange={onChange}
          value={newDisplayName}
          autoFocus
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{ marginTop: 10 }}
        />
      </form>
      <span onClick={onLogOutClick} className="formBtn cancelBtn logOut">
        Log Out
      </span>
    </div>
  );
};

export default Profile;
