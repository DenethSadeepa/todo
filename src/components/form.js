
const Form = ({setToDos, Todos, inputText, setText, setStatus}) => {

    const inputTextHandler = (e) => {
        setText(e.target.value);
    };
    
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...Todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;