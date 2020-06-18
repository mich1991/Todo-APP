import React from "react";
import Task from "./Task";
import './TaskList.css'


const TaskList = (props) => {
  let activeTasks = props.tasks.filter((task) => task.active);
  let doneTasks = props.tasks.filter((task) => !task.active);

  doneTasks = doneTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
      className='taskList'
    />
  ));
  activeTasks = activeTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
      className='taskList'
    />
  ));
  return (
    <>
      <h1 className='taskList__title'>Todo List</h1>
      {activeTasks}
      <h1 className='taskList__title'>Finished tasks</h1>
      {doneTasks}
    </>
  );
};

export default TaskList;
