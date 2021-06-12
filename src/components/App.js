import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(authService.currentUser); //유저 로그인 여부 확인가능
  return <AppRouter isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />;
}

export default App;
