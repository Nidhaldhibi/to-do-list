import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTask } from "../../redux/action/TaskActions";
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
    <div className="card">
      <div className="input-group mb-2">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="add your task"
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon1"
          onClick={onClickAdd}
        >
          Add
        </button>
      </div>
      <div className="d-flex justify-content-arround">
        <div>
          <input
            type="radio"
            name="task"
            id="completed"
            value="completed"
            onClick={onFiltre}
          />
          <label htmlFor="completed" className="form-lable">
            completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            id="Uncompleted"
            value="Uncompleted"
            onClick={onFiltre}
          />
          <label htmlFor="incompleted" className="form-lable">
            Uncompleted
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            id="all"
            value="all"
            onClick={onFiltre}
          />
          <label htmlFor="all" className="form-lable">
            All
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
