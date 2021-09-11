import React, { useState, useEffect } from 'react';
import './App.css';
import Form  from "./components/form";
import ToDo from "./components/TodoList";

function App() {
  const [inputText,setText] = useState("");
  const [Todos,setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() =>{
    getTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveTodos();
  },[Todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setfilteredTodos(Todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setfilteredTodos(Todos.filter((todo) => todo.completed === false))
        break;
      default:
        setfilteredTodos(Todos);
        break;
    }
  }

  const saveTodos = () => {
      localStorage.setItem("Todos",JSON.stringify(Todos));
  }

  const getTodos = () => {
    if(localStorage.getItem("Todos")=== null){
      localStorage.setItem("Todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("Todos"));
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form setToDos={setToDos} Todos={Todos} inputText={inputText} setText={setText} setStatus={setStatus} />
      <ToDo setToDos={setToDos} Todos={Todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
