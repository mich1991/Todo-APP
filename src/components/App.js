import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "zrobić dobry uczynej",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "pomalować dom po sylwestrze",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "schudnąć 30 kilogramów",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "sprzedać butelki po piwie (20 skrzynek)",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "jeszcze raz pomalować dom",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "fryzjer!!!",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "nie odbierać poleconego od komornika",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "kupić 2 butelki litrowe",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };
  addTask = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // deleteTask = (id) => {
  //   const tasks = [...this.state.tasks];
  //   const index = tasks.findIndex((task) => task.id === id);
  //   console.log(index);
  //   tasks.splice(index, 1);
  //   this.setState({
  //     tasks,
  //   });
  // };
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    console.log(id);
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  render() {
    return (
      <>
        <header>
          <h1>Todo APP</h1>
          <AddTask state={this.addTask} addTask={this.addTask} />
        </header>
        <main>
          <TaskList
            tasks={this.state.tasks}
            change={this.changeTaskStatus}
            delete={this.deleteTask}
          />
        </main>
      </>
    );
  }
}

export default App;
