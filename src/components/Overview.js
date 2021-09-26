import React from "react";
import Task from "./Task";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            tasks={tasks}
            key={task.id}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        );
      })}
    </ul>
  );
};

export default Overview;
