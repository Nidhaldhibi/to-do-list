import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "../redux/action/Types";

export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};
export const deleteTask = (payload) => {
  return { type: DELETE_TASK, payload };
};
export const setCurrentTask = (payload) => {
  return { type: SET_CURRENT_TASK, payload };
};
export const updateTask = (payload) => {
  return { type: UPDATE_TASK, payload };
};
export const toggleCompleted = (payload) => {
  return { type: TOGGLE_COMPLETED_TASK, payload };
};
export const filterTask = (payload) => {
  return { type: FILTER_TASK, payload };
};
