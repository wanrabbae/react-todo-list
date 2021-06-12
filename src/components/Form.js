import React, { } from 'react';
import { v4 as uuidV4 } from 'uuid';

function Form({ input, setInput, todos, setTodos }) {

    const formHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, { id: uuidV4(), title: input, completed: false }])
        setInput('')
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <form action="" onSubmit={formHandler} className="d-flex justify-content-around">
                    <div className="form-group formGroup">
                        <input type="text" name="inputTodo" id="inputTodo" className="form-control formControl" required placeholder="Enter a Todo..." value={input} onChange={e => setInput(e.target.value)} />
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