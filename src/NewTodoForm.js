import React from 'react';
import TodoForm from './TodoForm';

const NewTodoForm = (props) => {
  return (
    <TodoForm addTodo={props.addTodo}>
      {({ todo, handleSubmit, handleChange }) => {
        const disabled = todo.todoText === '';
        return (
          <div className="TodoForm new">
            <form onSubmit={handleSubmit}>
              <button type="submit" disabled={disabled}>
                Add
              </button>
              <label hidden>New Todo: </label>
              <input
                name="todo"
                value={todo.todoText}
                type="text"
                onChange={handleChange}
                placeholder="New Todo"
              />
            </form>
          </div>
        );
      }}
    </TodoForm>
  );
};

export default NewTodoForm;
