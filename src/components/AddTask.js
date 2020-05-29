import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    date: this.minDate,
    checked: "",
  };
  minDate = new Date().toISOString().slice(0, 10);
  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleCheckedChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleAddClick = (e) => {
    e.preventDefault();
    console.log("click");
    const { text, date, important } = this.state;
    const add = this.props.addTask(text, date, important);
    if (add) {
      this.setState({
        text: "",
        date: this.minDate,
        checked: "",
      });
    }
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="taskName">
            Task Name
            <input
              type="text"
              id="taskName"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="checkbox">
            Important?{" "}
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.handleCheckedChange}
              checked={this.state.checked}
            />
          </label>
          <br />
          <label htmlFor="date">
            Finish date:{" "}
            <input
              type="date"
              id="date"
              min={this.minDate}
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </label>
          <br />
          <button onClick={this.handleAddClick}>Add task</button>
        </form>
      </>
    );
  }
}

export default AddTask;
