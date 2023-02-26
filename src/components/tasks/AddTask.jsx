import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTask } from "../redux/action/TaskActions";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  
  const onClickAdd = () => {
    if (text) {
      const newTask = { id: Date.now(), description: text, isDone: false };
      dispatch(addTask(newTask));
      setText("");
    }
  };
  const onFiltre = (e) => {
    dispatch(filterTask(e.target.id));
  };
  
  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit="submit">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" onClick={onClickAdd}>
          Add
        </button>
        <div>
          <input
            type="radio"
            name="task"
            value="All"
            id="All"
            onClick={onFiltre}
          />
          <label className="form-label" htmlFor="Uncompleted">
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="completed"
            id="completed"
            onClick={onFiltre}
          />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="Uncompleted"
            id="Uncompleted"
            onClick={onFiltre}
          />
          <label className="form-label" htmlFor="Uncompleted">
            UnCompleted
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
