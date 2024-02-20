import React, { useState, useEffect } from 'react';

function TodoFrom({ addTask, setTexta }) {
    const [text, setText] = useState('');
    useEffect(() => {
        setText(setTexta)
    }, [addTask, setTexta])
    return (
        <div className='fromWrap'>
            <input
                placeholder='Add task'
                className='inputTxt'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)} className='submitBtn'>Add</button>
        </div>
    );
}
export default TodoFrom;