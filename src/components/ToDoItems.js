import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function ToDoItems(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>
        {props.text} {<DeleteIcon />}
      </li>
    </div>
  );
}

export default ToDoItems;
