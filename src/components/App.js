import React, { Component } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [],
  };

  counter = 1;

  addTask = (text, date, status) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      status: status,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;

    return true;
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <InputForm addTask={this.addTask} />
          <div className="container">
            <TaskList tasks={this.state.tasks} />
          </div>
          <br />
          <hr />
        </div>
      </>
    );
  }
}

export default App;
