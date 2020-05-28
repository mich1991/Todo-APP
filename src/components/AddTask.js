import React, { Component } from "react";

class AddTask extends Component {
  state = {
    title: "",
    date: "",
    important: false,
    deadline: new Date(),
    finished: false,
  };

  render() {
    return (
      <>
        <form>
          <input type="text" />
          <button onClick={this.props.addTask}>Add Task</button>
          <br />
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            important
          </label>
          <br />
          <label htmlFor="">
            <input type="date" name="" id="" />
            deadline
          </label>
        </form>
        <br />
        <hr />
      </>
    );
  }
}

export default AddTask;
