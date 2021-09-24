// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);

  }


  handleChange(e){
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };
  /* handleDelete = (newTasks) =>{
    this.setState({
      tasks: newTasks,
    })
  } */

  handleDelete (){
    console.log("hola giles");
  }

  onSubmitTask(e){
    e.preventDefault();
    if(this.state.task.text === ''){console.log('Holagiles')};
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
    console.log(this.state.tasks)
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Write a task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          {
            task.text !== '' &&
            <button type="submit">Add Task</button>
          }
        </form>
        <Overview tasks={tasks} onDelete={this.handleDelete} /> 
      </div>
    );
  }
}
// onDelete={this.handleDelete} 

export default App;