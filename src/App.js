import "./App.css";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <AddTask />
      <TaskList />
      <EditTask />
    </div>
  );
}

export default App;
