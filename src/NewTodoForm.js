import React from 'react';
import './NewTodoForm.css';
import { HOCTodoForm } from './HOCTodoForm';

const NewTodoForm = (props) => {
  return (
    <div className="NewTodoForm">
      <form onSubmit={props.handleSubmit}>
        <button type="submit" disabled={props.disabled}>
          {props.buttonText}
        </button>
        <label hidden>{props.labelText}</label>
        <input
          name="todo"
          value={props.todo.todoText}
          type="text"
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
};

export default HOCTodoForm(NewTodoForm, {
  buttonText: 'Add',
  labelText: 'New Todo: ',
  placeholder: 'New Todo',
});
