import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbase";
import Mweet from "../components/Mweet";
import MweetFactory from "../components/MweetFactory";

const Home = ({ userObj }) => {
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

  return (
    <div>
      <MweetFactory userObj={userObj} />
      <div>
        {mweets.map((m) => (
          <Mweet
            key={m.id}
            mweetObj={m}
            isOwner={m.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
