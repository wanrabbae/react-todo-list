import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App(props) {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ?
        <div className="d-flex justify-content-center align-items-center spinnerLoad">
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <div className="d-flex justify-content-center align-items-center wrapper">
          <div className="card">
            <div className="card-header text-center">
              <img src={process.env.PUBLIC_URL + '/img/react.gif'} className="logoReact img-fluid" alt="" /> Todo-List
        </div>
            <div className="card-body">
              <div className="container">
                <div className="formWrap">
                  <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                  />
                </div>
                <div className="listOfTodos">
                  <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer text-center py-3">
              &copy; Copyright 2021 Alwan.
        </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;