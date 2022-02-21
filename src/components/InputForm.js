import React, { Component } from "react";

class InputForm extends Component {
  handleTextInput = (event) => {
    this.props.handleTextInput(event.target.value)
  };

  handleDate = (event) => {
    this.props.handleDate(event.target.value)
  };

  handleClick = (event) => {
    this.props.handleClick(event.target.name)
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
              value={this.props.state.text}
              onChange={this.handleTextInput}
            />
            <p>{this.props.state.errorMessage}</p>
          </label>

          <label>
            The end of task:
            <input
              type="date"
              id="date"
              name="date"
              value={this.props.minDate}
              min={this.props.minDate}
              onChange={this.handleDate}
            />
          </label>
        </div>
        <div className="buttonsContainer">
          <button className="btnOne" name="doFirst" onClick={this.handleClick}>
            1.Do First
          </button>
          <button className="btnTwo" name="schedule" onClick={this.handleClick}>
            2. Schedule
          </button>
          <button className="btnThree" name="delegate" onClick={this.handleClick}>
            3. Delegate
          </button>
          <button className="btnFour" name="dontDo" onClick={this.handleClick}>
            4. Don't do
          </button>
        </div>
      </>
    );
  }
}

export default InputForm;
