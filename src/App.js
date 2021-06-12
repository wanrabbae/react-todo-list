import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App(props) {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div>
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
                />
              </div>
              <div className="listOfTodos">
                <TodoList
                  todos={todos}
                  setTodos={setTodos}
                />
              </div>
            </div>
          </div>
          <div className="card-footer text-center py-3">
            &copy; Copyright 2021 Alwan.
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;