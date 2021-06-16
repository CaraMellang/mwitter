import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [mweet, setMweet] = useState("");
  const [mweets, setMweets] = useState([]);
  const getMweets = async () => {
    const dbMweets = await dbService.collection("mweets").get();
    dbMweets.forEach((document) => {
      const mweetObject = {
        ...document.data(),
        id: document.id,
      };
      setMweets((prev) => [mweetObject, ...prev]);
      //리액트는 setnames()에 매개를 함수형태로 작성하면
      // prev(변수)로 전달된 이전값에 접근하게 해줌
    });
  };
  useEffect(() => {
    //useEffect는 컴포넌트가 mount될 때 실행(클래스 didmount)
    getMweets();
  }, []);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMweet(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("mweets").add({
      //promise를 리턴하므로 async 사용
      mweet, //다큐먼트의 키. mweet: mweet 변수명과 같으므로 한단어로 생략
      createAt: Date.now(),
    });
    setMweet("");
  };
  console.log(mweets);
  return (
    <form>
      <input
        type="text"
        placeholder="what's on your mind"
        maxLength={120}
        value={mweet}
        onChange={onChange}
      />
      <input type="submit" value="Mweet" onClick={onSubmit} />
      <div>
        {mweets.map((m) => (
          <div key={m.id}>
            <h4>{m.mweet}</h4>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Home;
