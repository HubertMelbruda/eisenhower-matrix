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
      done: false,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    this.counter++;

    return true;
  };

  handleDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })

  }

  handleTaskDone = (id) => {
    let tasks = [...this.state.tasks]

    tasks = tasks.map(task => {
      if (id === task.id) {
        task.done = !task.done
      }
      return task
    })
    
    this.setState({
      tasks,
    })
  }

  render() {
    return (
      <>
        <div className="mainDiv">
          <InputForm addTask={this.addTask} />
          <div className="container">
            <TaskList tasks={this.state.tasks} delete={this.handleDelete} taskDone={this.handleTaskDone} />
          </div>
          <br />
          <hr />
        </div>
      </>
    );
  }
}

export default App;
