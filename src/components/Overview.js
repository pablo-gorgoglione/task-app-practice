import React from "react";
import { Component } from "react";
import Task from "./Task";

class Overview extends Component{
  render(){
    return(
            <ul>
            {this.props.tasks.map((task) => {
              <li>
              <Task task={task} key={task.id}/>
              </li>
            })}
          </ul>    
    )
  }
};

export default Overview;