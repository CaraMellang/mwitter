import React from "react";

const Mweet = ({ mweetObj }) => {
  return (
    <div>
      <h4>{mweetObj.mweet}</h4>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default Mweet;
