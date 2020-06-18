import React from "react";
import './Task.css'
const Task = (props) => {
  let finishStyle = {
    color: "red",
    fontSize: 10,
  };
  if (props.task.active) {
    return (
      <div className='task' >
        <p className='task__text'>
          <strong>{props.task.text}</strong> to : {props.task.date}
        </p>
        <button className='task__button task__button--done' id="done" onClick={() => props.change(props.task.id)}>
          Done
        </button>
        <button className='task__button task__button--delete' id="delete" onClick={() => props.delete(props.task.id)}>
          X
        </button>
      </div>
    );
  } else {
    const finish = new Date(props.task.finishDate).toISOString().slice(0, 10);
    return (
      <div className='task' >
        <p className='task__text'>
          <strong>{props.task.text}</strong> to : {props.task.date}
          <span className='task__confirm' style={finishStyle}>finished at {finish}</span>
        </p>
        <button className='task__button task__button--delete' id="delete" onClick={() => props.delete(props.task.id)}>
          X
        </button>
        <br />
      </div>
    );
  }
};
export default Task;
