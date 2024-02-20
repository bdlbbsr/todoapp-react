import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }
console.log("toggleCompleted", task.completed )
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p className={task.completed ? 'done' : '' }>{task.text}</p>
            <button onClick={() => deleteTask(task.id)} className='deleteBtn'>
                X
            </button>
        </div>
    );
}
export default TodoItem;