import Todo from "./todo";

const ToDo = () => {
    return(
    <div className="todo-container">
      <ul className="todo-list">
        <Todo />
        <Todo />
      </ul>
    </div>
    );
};

export default ToDo;