import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Stuff to do ({activeTasks.length})</h1>
        {activeTasks.length > 0 ? activeTasks : <p>You have nothing to do.</p>}
      </div>
      <hr />
      <div className="done">
        <h1>Finished tasks ({doneTasks.length})</h1>
        {doneTasks.length > 5 ? <p>Your last 5 tasks</p> : null}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
