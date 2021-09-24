import React from "react";
import { Component } from "react";

class Task extends Component{
    
    // deleteOneTask(){
    //     this.props.onDelete(this.props.tasks.filter((t)=> t.id !== this.props.task.id))
    // }

    render(){
        const task = this.props.task;
        return(
            <li>
               {task.text} 
               <button> Delete</button>
            </li>
        )
 }
}

export default Task;


