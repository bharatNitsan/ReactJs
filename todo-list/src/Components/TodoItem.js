
function TodoItem(props) {
  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={`task-${props.todo.id}`}  checked={props.todo.completed}/>
      <label className="form-check-label" htmlFor={`task-${props.todo.id}`}>{props.todo.text}</label>
    </div>
  );
}

export default TodoItem;