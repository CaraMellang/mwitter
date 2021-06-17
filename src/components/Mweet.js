import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Mweet = ({ mweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setNewMweet] = useState(mweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("진짜루?");
    if (ok) {
      await dbService.doc(`mweets/${mweetObj.id}`).delete();
      //doc()의 documentpath인자는 데이터베이스의 폴더형식으로
    }
  };
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewMweet(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`mweets/${mweetObj.id}`).update({
      //업데이트는 객체로
      text: newMweet,
    });
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={newMweet}
              placeholder="Edit your mweet"
              onChange={onChange}
              required
            />
            <input type="submit" value="Update Mweet" />
          </form>
          <button onClick={toggleEditing}>cancel</button>
        </>
      ) : (
        <>
          <h4>{mweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Mweet;
