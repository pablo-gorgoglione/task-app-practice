import React from "react";

const Task = (props) => {
  const { task, tasks } = props;

  const onDelete = () => {
    props.onDelete(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li key={props.task.key}>
      {props.task.text}
      <button onClick={onDelete}> Delete </button>
    </li>
  );
};

export default Task;

// onDelete = () => {
//     let newTasks = this.props.tasks
//     console.log(this.props.tasks.stringify+ '   --state tasks')
//     console.log(this.props.task.text+ '   --state task')
//     // console.log(newTasks.stringify + '    --Sin sacar weas')
//     this.props.onDelete(newTasks.filter((t)=> t.id !== this.props.task.id))
//     // console.log(this.props.tasks.filter((t)=> t.id !== this.props.task.id))
//     // console.log(newTasks.legnht + 'saque las weas')
// };
// //<button onClick={this.onDelete}> Delete </button>
