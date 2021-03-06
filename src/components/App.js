import React, { Component } from "react";
import "./App.css";
import InputForm from "./InputForm";
import TaskList from "./TaskList";


class App extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    tasks: [],
    text: "",
    date: this.minDate,
    errorMessage: "",
  };

  counter = 1;

  handleTextInput = (textInput) => {
    this.setState({
      text: textInput,
    });
  };

  handleDate = (dateInput) => {
    this.setState({
      date: dateInput,
    });
  };

  handleClick = (tasksName) => {
    this.setState({ errorMessage: "" });
    const task = {
      id: this.counter,
      text: this.state.text,
      date: this.state.date,
      status: tasksName,
      done: true,
      doneDate: "",
    };

    if (this.state.text === "") {
      this.setState({
        errorMessage: "Please type the task name in the input.",
      });
    } else {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, task],
        text: "",
      }));
    }
    this.counter++;
  };

  handleDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  handleTaskDone = (id) => {
    const doneDate = new Date().toISOString().slice(0, 10);

    const tasks = this.state.tasks.map((task) => {
      if (id === task.id ) {
        task.done = !task.done;
        task.doneDate = doneDate;
      } 
      return task;
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <InputForm
            state={this.state}
            addTask={this.addTask}
            handleTextInput={this.handleTextInput}
            handleDate={this.handleDate}
            minDate={this.minDate}
            handleClick={this.handleClick}
          />
          <div className="container">
            <TaskList
              tasks={this.state.tasks}
              delete={this.handleDelete}
              taskDone={this.handleTaskDone}
            />
          </div>
          <br />
          <hr />
        </div>
      </>
    );
  }
}

export default App;
