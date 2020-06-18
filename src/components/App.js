import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Footer from "./Footer";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: uuid(),
        text: "Lorem ipsum dolor sit amet.",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Duis nec rhoncus nibh.",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Cras eu tellus magna.",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Maecenas dignissim",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Nullam sed nibh felis",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Quisque viverra",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "In hac habitasse platea dictumst",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Nunc mattis euismod dolor quis commodo.",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: uuid(),
        text: "Pellentesque commodo vel urna vitae placerat.",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  addTask = (text, date, important) => {
    let task = {
      id: uuid(),
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.setState({
      tasks: [...this.state.tasks, task],
    });
    return true;
  };
  handleDelete = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };
  handleChangeStatus = (id) => {
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
        <AddTask addTask={this.addTask} />
        <main>
          <TaskList
            tasks={this.state.tasks}
            delete={this.handleDelete}
            change={this.handleChangeStatus}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
