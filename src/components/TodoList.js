import Todo from "./todo";

const ToDo = ({Todos, setToDos, filteredTodos}) => {
    return(
    <div className="todo-container">
      <ul className="todo-list">{
        filteredTodos.map((todo)=> (
          <Todo 
          setToDos={setToDos} 
          Todos={Todos}
          filteredTodos={filteredTodos}
          key={todo.id} 
          todo={todo}
          text={todo.text} />
        ))}
      </ul>
    </div>
    );
};

export default ToDo;