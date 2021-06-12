import React from 'react';

function TodoList({ todos, setTodos }) {
    return (
        <div className="container mt-3">
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id} className="listTodos mb-3">
                            <input type="text" name="todo" id="todo" value={todo.title} className="form-control" onChange={e => e.preventDefault()} />
                        </li>
                    )
                })
            }
        </div>
    );
}

export default TodoList;