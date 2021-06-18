import { authService } from "fbase";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    // history.push("/");
    // 이친구는 클라이언트단에서 url을 변경한 것 "처럼"보이게함
    window.location.replace("/"); //따라서 리프레쉬하는 이걸사용
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
