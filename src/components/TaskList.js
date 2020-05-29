import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  let activeTasks = props.tasks.filter((task) => task.active);
  let doneTasks = props.tasks.filter((task) => !task.active);

  doneTasks = doneTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  activeTasks = activeTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <h1>Todo List</h1>
      {activeTasks}
      <hr />
      <h1>Finished tasks</h1>
      {doneTasks}
    </>
  );
};

export default TaskList;
