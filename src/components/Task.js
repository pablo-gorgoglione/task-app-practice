import React from "react";
import { Component } from "react";

class Task extends Component{

    
    // deleteOneTask(){
    //     
    // }

    onDelete = () => {
        let newTasks = this.props.tasks
        console.log(this.props.tasks.stringify+ '   --state tasks')
        console.log(this.props.task.text+ '   --state task')
        // console.log(newTasks.stringify + '    --Sin sacar weas')
        this.props.onDelete(newTasks.filter((t)=> t.id !== this.props.task.id))
        // console.log(this.props.tasks.filter((t)=> t.id !== this.props.task.id))
        // console.log(newTasks.legnht + 'saque las weas')
    };
    //<button onClick={this.onDelete}> Delete </button>

    render(){
        return(
            <li key={this.props.task.key}>
               {this.props.task.text}
               <button onClick={this.onDelete}> Delete </button>
            </li>
        )
 }
}

export default Task;


