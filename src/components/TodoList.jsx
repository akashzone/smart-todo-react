
import './TodoList.css';
import { useState, useRef, useEffect } from 'react';
const TodoList = () => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(()=>{
        try {
            const saved = localStorage.getItem("todos");
            const parsed = saved ? JSON.parse(saved) : [];

            return Array.isArray(parsed)
                ? parsed.filter(todo => todo && todo.text)
                : [];
        } catch {
            return [];
        }
    });

    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    function handleClick() {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };

            setTodos((prev)=> [...prev, newTodo]);
            setInputValue('');
            handleFocus();
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='todoInput'>
            <div className='inputTodo'>
                <input ref={inputRef} type="text" placeholder="Add a new todo..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
                <button className='addBtn' onClick={handleClick}>Add</button>
            </div>
            <div>
                <ul className="todoList">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={() => setTodos((prev) => prev.filter(t => t.id !== todo.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList