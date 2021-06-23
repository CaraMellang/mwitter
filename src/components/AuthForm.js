import React, { useState } from "react";
import { authService } from "fbase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        //create accrount
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        //login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (e) {
      setError(e.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev); //이전값의 반대값으로 리턴
  //리액트는 setnames()에 매개를 함수형태로 작성하면
  // prev(변수)로 전달된 이전값에 접근하게 해줌
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <input
          type="submit"
          className="authInput"
          value={newAccount ? "Create Account" : "Login"}
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span
        onClick={toggleAccount}
        className="authSwitch"
        style={{ backgroundColor: "aqua", border: "solid" }}
      >
        {newAccount ? "sign in" : "sign up"}
      </span>
    </>
  );
};

export default AuthForm;
