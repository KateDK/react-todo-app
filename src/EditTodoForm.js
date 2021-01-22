import React from 'react';
import './EditTodoForm.css';
import { HOCTodoForm } from './HOCTodoForm';

const EditTodoForm = (props) => {
  return (
    <div className="EditTodoForm">
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

export default HOCTodoForm(EditTodoForm, {
  buttonText: 'Save',
  labelText: 'Edit Todo: ',
  placeholder: 'Edit Todo',
});
