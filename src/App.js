import React, { useState } from 'react';
import './App.css';
import Form  from "./components/form";
import ToDo from "./components/TodoList";

function App() {
  const [inputText,setText] = useState("");
  const [Todos,setToDos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List </h1>
      </header>
      <Form setToDos={setToDos} Todos={Todos} inputText={inputText} setText={setText} />
      <ToDo />
    </div>
  );
}

export default App;
