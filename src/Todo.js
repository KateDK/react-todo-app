import React from 'react';
import './Todo.css';

const Todo = (props) => (
  <div className="Todo">
    <h2>{props.todo}</h2>
    <button onClick={() => props.deleteTodo(props.id)}>X</button>
    <button>Edit</button>
  </div>
);

export default Todo;
