import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Mweet from "../components/Mweet";

const Home = ({ userObj }) => {
  const [mweet, setMweet] = useState("");
  const [mweets, setMweets] = useState([]);

  useEffect(() => {
    //useEffect는 컴포넌트가 mount될 때 실행(클래스 didmount)
    dbService.collection("mweets").onSnapshot((snap) => {
      //onsnapshot은 리스너로, DB를 실시간 감지해서 변화가있으면 자동호출
      const mweetArray = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMweets(mweetArray);
      console.log(mweetArray);
    });
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
      // mweet, //다큐먼트의 키. mweet: mweet 변수명과 밸류가 같으면 한단어로 생략
      text: mweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
    });
    setMweet("");
  };
  console.log(mweets);
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="what's on your mind"
          maxLength={120}
          value={mweet}
          onChange={onChange}
        />
        <input type="submit" value="Mweet" onClick={onSubmit} />
      </form>
      <div>
        {mweets.map((m) => (
          <Mweet
            key={m.id}
            mweetObj={m}
            isOwner={m.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
