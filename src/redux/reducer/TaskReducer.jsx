import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
  UPDATE_TASK,
} from "./redux/action/Types";

const initialstate = {
  todos: [],
  current: null,
  FilteredTodos: [],
};
const taskReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TASK:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload)],
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case FILTER_TASK:
      return {
        ...state,
        FilteredTodos:
          payload === "completed"
            ? state.todos.filter((todo) => todo.isDone)
            : payload === "incompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : [],
      };
    default:
      return state;
  }
};
export default taskReducer;
