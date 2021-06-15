import React, { useState } from "react";

const Home = () => {
  const [mweet, setMweet] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMweet(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <input
        type="text"
        placeholder="what's on your mind"
        maaLength={120}
        value={mweet}
        onChange={onChange}
      />
      <input type="submit" value="Mweet" />
    </form>
  );
};

export default Home;
