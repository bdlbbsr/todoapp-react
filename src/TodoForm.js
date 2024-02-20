import React, { useState, useEffect } from 'react';

function TodoFrom({ addTask, setInput }) {
    const [inValue, setInValue] = useState('');
    useEffect(() => {
        
        setInValue(setInput)
        
    }, [addTask, setInput])
    return (
        <div className='fromWrap'>
           
            <input
                placeholder='Add task'
                className='inputTxt'
                value={inValue}
                onChange={e => setInValue(e.target.value)}
            />
            <button onClick={() => addTask(inValue)} disabled={!inValue} className='submitBtn'>Add</button>
        </div>
    );
}
export default TodoFrom;