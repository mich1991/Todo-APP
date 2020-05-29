import React from "react";
const Task = (props) => {
  let finishStyle = {
    color: "red",
    fontSize: 10,
  };
  if (props.task.active) {
    return (
      <div>
        <p>
          <b>{props.task.text}</b> to : {props.task.date}
        </p>
        <button id="done" onClick={() => props.change(props.task.id)}>
          Done
        </button>
        <button id="delete" onClick={() => props.delete(props.task.id)}>
          X
        </button>
      </div>
    );
  } else {
    const finish = new Date(props.task.finishDate).toISOString().slice(0, 10);
    return (
      <div>
        <p>
          <b>{props.task.text}</b> to : {props.task.date}
        </p>
        <button id="delete" onClick={() => props.delete(props.task.id)}>
          X
        </button>
        <span style={finishStyle}>finished at {finish}</span>
      </div>
    );
  }
};
export default Task;
