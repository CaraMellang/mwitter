import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";

const MweetFactory = ({ userObj }) => {
  const [mweet, setMweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setMweet(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`); //파일에 대한 reference로 참조
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
      //getDownloadURL은 promise를 리턴(promise는 쉽게말해 기다리라는 의미)
    }
    const mweetObj = {
      text: mweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("mweets").add(mweetObj);
    setMweet("");
    setAttachment("");

    // await dbService.collection("mweets").add({
    //   //promise를 리턴하므로 async 사용
    //   // mweet, //다큐먼트의 키. mweet: mweet 변수명과 밸류가 같으면 한단어로 생략
    //   text: mweet,
    //   createAt: Date.now(),
    //   creatorId: userObj.uid,
    // });
    // setMweet("");
  };
  const onFileChange = (event) => {
    // console.log(event.target.files);
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      // 파일 로딩이 끝나면 finishedEvent를 받음(onloadend)
      const {
        currentTarget: { result },
      } = finishedEvent;
      console.log(finishedEvent);
      setAttachment(result);
    };
    reader.readAsDataURL(theFile); //파일 데이터를 얻음(result가 이미지 데이터(currnetTarget -> result))
  };

  const onClearAttachment = () => setAttachment("");
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="what's on your mind"
        maxLength={120}
        value={mweet}
        onChange={onChange}
      />
      <input type="file" accept="imaga/*" onChange={onFileChange} />
      <input type="submit" value="Mweet" />
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </form>
  );
};

export default MweetFactory;
