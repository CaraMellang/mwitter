import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Mweet = ({ mweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newMweet, setNewMweet] = useState(mweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("진짜루?");
    if (ok) {
      await dbService.doc(`mweets/${mweetObj.id}`).delete();
      //doc()의 documentpath인자는 데이터베이스의 폴더형식으로
      await storageService.refFromURL(mweetObj.attachmentUrl).delete();
      //스토리지에 있는 사진삭제
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
    <div className="mweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container mweetEdit">
            <input
              type="text"
              value={newMweet}
              placeholder="Edit your mweet"
              onChange={onChange}
              required
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update Mweet" className="formBtn" />
          </form>
          <button onClick={toggleEditing} className="formBtn cancelBtn">
            cancel
          </button>
        </>
      ) : (
        <>
          <h4>{mweetObj.text}</h4>
          {mweetObj.attachmentUrl && <img src={mweetObj.attachmentUrl} />}

          {isOwner && (
            <div className="mweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Mweet;
