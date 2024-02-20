import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoFrom from './TodoForm';

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Buy groccery',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting a friend',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    function addTask(inValue) {
        console.log("inValue", inValue)
        const newTask = {
            id: Date.now(),
            text: inValue,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    console.log("completed", tasks)

    return (
        <div className="todo-list">
            <TodoFrom addTask={addTask} setInput={text} />

            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            {/* <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button> */}

        </div>
    );
}
export default TodoList;