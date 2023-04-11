import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      {props.title}-{props.content}-{props.productid}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
