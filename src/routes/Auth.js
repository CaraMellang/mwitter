import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
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

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Login"} />
      </form>
      <span
        onClick={toggleAccount}
        style={{ backgroundColor: "aqua", border: "solid" }}
      >
        {newAccount ? "sign in" : "sign up"}
      </span>
      {error}

      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
