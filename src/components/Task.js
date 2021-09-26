import React, { useState } from "react";

const Task = (props) => {
  const [edit, setEdit] = useState(false);
  const [inputText, setInputText] = useState(props.task.text);
  const { task, tasks } = props;

  const onDelete = () => {
    props.onDelete(tasks.filter((t) => t.id !== task.id));
  };
  const openEdit = () => {
    setEdit(!edit);
    if (edit === true) {
      props.onEdit(inputText, task.id);
    }
  };
  const editTextHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <li key={props.task.key}>
      {task.text}
      <button onClick={onDelete}> Delete </button>
      <button onClick={openEdit}> {edit ? "Submit" : "Edit"}</button>
      {edit === true && (
        <input onChange={editTextHandler} type="text" value={inputText} />
      )}
    </li>
  );
};

export default Task;
//onBlur={openEdit}
