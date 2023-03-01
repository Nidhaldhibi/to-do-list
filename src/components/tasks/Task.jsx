import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCurrentTask,
  toggleCompleted,
} from "../../redux/action/TaskActions";

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }
    if (e.target.id == "delete") {
      dispatch(deleteTask(todo.id));
    }
    if (e.target.id === "completed") {
      dispatch(toggleCompleted(todo.id));
    }
  };
  return (
    <li
      className={`list-group-item d-flex align-item-center justify-content-between li ${
        todo.isDone && "list-group-item-success"
      }`}
      id="todo-list li"
    >
      <div className={todo.isDone ? "completed" : ""}>{todo.description}</div>
      <div className="btn-group" role="group">
        <i
          id="completed"
          className="fa fa-check text-secondary"
          onClick={onClick}
        ></i>
        <i
          id="edit"
          className="fa fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={onClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={onClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;
