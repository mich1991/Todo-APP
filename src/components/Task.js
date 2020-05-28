import React from "react";
const Task = (props) => {
  const { text, date, id, important, active, finishDate } = props.task;

  const styleImportant = {
    color: "red",
  };
  if (active) {
    return (
      <div>
        <b style={important && active ? styleImportant : null}>{text}</b> do{" "}
        {date}
        <button className="complete" onClick={() => props.change(id)}>
          DONE
        </button>{" "}
        <button className="delete" onClick={() => props.delete(id)}>
          X
        </button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <b>{text}</b> do {date}
        <button className="delete" onClick={() => props.delete(id)}>
          X
        </button>
        <p>finished at - {finish}</p>
      </div>
    );
  }
};
export default Task;
