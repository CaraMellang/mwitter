import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedin, setIsLoggedin] = useState(authService.currentUser); //유저 로그인 여부 확인가능
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      //authservice가 바뀌면 유져상태체인지가 호출(로그인,로그아웃시 호출)
      if (user) {
        // setIsLoggedin(true);
        // setUserObj(user); // 유저값을 넣음
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        //얘 쓰면 리프레쉬 없이 바로 로그아웃
        setUserObj(null);
      }
      // else {
      //   setIsLoggedin(false);
      // }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    console.log(authService.currentUser);
    //데이터가 크므로 리액트가 판단하기 복잡해서 바로 변화가 이뤄지지못함
    //방법 1) object의 크기를 줄여줌(uid, updateProfile ,didplayName)
    //방법 2) 버그많은 안씀
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updataProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedin={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "initializing..."
      )}
    </>
  );
}

export default App;
