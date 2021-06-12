import React, { useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            console.log(todo);
            return todo.id === id ? { id, title, completed } : todo
        })

        setTodos(newTodo)
        setEditTodo('')
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput('')
        }
    }, [setInput, editTodo])

    const formHandler = (e) => {
        e.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { id: uuidV4(), title: input, completed: false }])
            setInput('')
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <form action="" onSubmit={formHandler} className="d-flex justify-content-around">
                    <div className="form-group formGroup">
                        <input type="text" autoFocus name="inputTodo" id="inputTodo" className="form-control formControl" required placeholder="Enter a Todo..." value={input} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div className="form-group formGroup">
                        <button type="submit" name="submit" className="btn btn-warning">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;