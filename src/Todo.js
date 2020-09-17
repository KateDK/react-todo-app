import React from 'react';
import './Todo.css';

const Todo = (props) => (
  <div className="Todo">
    <h3>{props.todo}</h3>
    <button onClick={() => props.deleteTodo(props.id)}>X</button>
  </div>
);

export default Todo;
