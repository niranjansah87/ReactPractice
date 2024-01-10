import './App.css'
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
function App() {


  return (
    <>
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem />
      <TodoItem2 />
      </div>

    </>

  )
}

export default App;
