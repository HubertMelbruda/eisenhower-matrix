import React, { Component } from "react";

class InputForm extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    date: this.minDate,
  };

  handleTextInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleClick = (event) => {
    const { text, date } = this.state;
    const status = event.target.name;

    const addTask = this.props.addTask(text, date, status); // this.props bo propsy sa przekazane do komponentu? dlaczego nie props.addTask ( bo nie sa przekazane do metody? )

    if (addTask) {
      this.setState({
        text: "",
        date: this.minDate,
      });
    }
  };

  render() {
    return (
      <>
        <div className="form">
          <label htmlFor="input">
            Enter your task:
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Tape a task"
              value={this.state.text}
              onChange={this.handleTextInput}
            />
          </label>

          <label>
            The end of task:
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              min={this.minDate}
              onChange={this.handleDate}
            />
          </label>
        </div>
        <div className="buttonsContainer">
          <button className="addButton" name="one" onClick={this.handleClick}>
            1.Important / Urgent
          </button>
          <button className="addButton" name="two" onClick={this.handleClick}>
            2. Important / Not urgent
          </button>
          <button className="addButton" name="three" onClick={this.handleClick}>
            3. Unimportant / Urgent
          </button>
          <button className="addButton" name="four" onClick={this.handleClick}>
            4. Unimportant / Not urgent
          </button>
        </div>
      </>
    );
  }
}

export default InputForm;
