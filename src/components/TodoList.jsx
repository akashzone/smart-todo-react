
import './TodoList.css';
import { useState, useRef, useEffect } from 'react';
const TodoList = ({ toggle }) => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(() => {
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

            setTodos((prev) => [...prev, newTodo]);
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
        <div className='todoInput' style={{ backgroundColor: toggle ? "#f9f9f9" : "#1a1a1a", color: toggle ? "#000" : "#e0e0e0" }}>
            <div className='inputTodo'>
                <input style={{ backgroundColor: toggle ? "#fff" : "#2a2a2a", color: toggle ? "#000" : "#e0e0e0", border: `1px solid ${toggle ? "#ccc" : "#555"}`}}
                    ref={inputRef}
                    type="text" placeholder="Add a new todo..."
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress} 

                    />
                <button className='addBtn' onClick={handleClick}>Add</button>
            </div>
            <div>
                <ul className="todoList">
                    {todos.map((todo) => (
                        <li style={{ backgroundColor: toggle ? "#ffffff" : "#2a2a2a", color: toggle ? "#000" : "#e0e0e0" }} key={todo.id}>
                            <span style={{ color: toggle ? "#000" : "#e0e0e0" }}>{todo.text}</span>
                            <button onClick={() => setTodos((prev) => prev.filter(t => t.id !== todo.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList