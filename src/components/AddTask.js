import React, { Component } from "react";
import './AddTask.css'

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
        <h1 className='header'> Todo App</h1>
        <form className='addTask'>
          <label className='addTask__item' htmlFor="taskName">
            Task Name
            <input className='addTask__input'
              type="text"
              id="taskName"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </label>
          <label className='addTask__item' htmlFor="checkbox">
            Important?{" "}
            <input className='addTask__input addTask__input--checkbox'
              type="checkbox"
              id="checkbox"
              onChange={this.handleCheckedChange}
              checked={this.state.checked}
            />
          </label>
          <label className='addTask__item' htmlFor="date">
            Finish date:{" "}
            <input className='addTask__input'
              type="date"
              id="date"
              min={this.minDate}
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </label>
          <br />
          <button className='addTask__button' onClick={this.handleAddClick}>Add task</button>
        </form>
      </>
    );
  }
}

export default AddTask;
