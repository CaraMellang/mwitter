import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(authService.currentUser); //유저 로그인 여부 확인가능
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      //authservice가 바뀌면 유져상태체인지가 호출
      if (user) {
        setIsLoggedin(true);
        setUserObj(user); // 유저값을 넣음
      } else {
        setIsLoggedin(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedin={isLoggedin}
          userObj={userObj}
        />
      ) : (
        "initializing..."
      )}
      <footer>this is footer</footer>
    </>
  );
}

export default App;
