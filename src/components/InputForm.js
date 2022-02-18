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

    if (this.state.text === "") {
      alert("Please enter your task");
    } else {
      const addTask = this.props.addTask(text, date, status);

      if (addTask) {
        this.setState({
          text: "",
          date: this.minDate,
        });
      }
    }
  };

  render() {
    return (
      <>
        <div className="form">
          <label htmlFor="input">
            Create new task:
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Create new task..."
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
          <button className="btnOne" name="one" onClick={this.handleClick}>
            1.Important / Urgent
          </button>
          <button className="btnTwo" name="two" onClick={this.handleClick}>
            2. Important / Not urgent
          </button>
          <button className="btnThree" name="three" onClick={this.handleClick}>
            3. Unimportant / Urgent
          </button>
          <button className="btnFour" name="four" onClick={this.handleClick}>
            4. Unimportant / Not urgent
          </button>
        </div>
      </>
    );
  }
}

export default InputForm;
