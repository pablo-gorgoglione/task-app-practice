import React from "react";

const Overview = (props) => {
  const { tasks } = props;
  
  const onDelete = () =>{
    // return this.props.onDelete(this.props.tasks)
    console.log(tasks.filter((t)=> t.id !== this.props.task.id))
    tasks.map((t) => {
      // return console.log(t.text + ' --test5')
      this.props.onDelete()
    })
  }

  return (
    <ul>
      {tasks.map((task) => {
        return <div key={task.id}>
          <li>{task.text}</li>
          <button onClick={onDelete} >Delete</button>
        </div>
      })}
    </ul>
  );
};

export default Overview;



