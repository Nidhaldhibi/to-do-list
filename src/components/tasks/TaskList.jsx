import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = () => {
  const { todos, FilteredTodos } = useSelector((state) => state.taskReducer);
  if (FilteredTodos.length > 0) {
    return (
      <ul className="liste-group mt-3">
        {FilteredTodos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="liste-group mt-3">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;
