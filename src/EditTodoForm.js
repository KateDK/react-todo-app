import React from 'react';
import './EditTodoForm.css';
import TodoForm from './TodoForm';

const EditTodoForm = (props) => {
  return (
    <TodoForm
      updateTodo={props.updateTodo}
      todo={props.todo}
      toggleEdit={props.toggleEdit}
      render={({ todo, handleSubmit, handleChange }) => {
        const disabled = todo.todoText === '';
        return (
          <div className="EditTodoForm">
            <form onSubmit={handleSubmit}>
              <button type="submit" disabled={disabled}>
                Save
              </button>
              <label hidden>Edit Todo: </label>
              <input
                name="todo"
                value={todo.todoText}
                type="text"
                onChange={handleChange}
                placeholder="Edit Todo"
              />
            </form>
          </div>
        );
      }}
    />
  );
};
export default EditTodoForm;
// export default HOCTodoForm(EditTodoForm, {
//   buttonText: 'Save',
//   labelText: 'Edit Todo: ',
//   placeholder: 'Edit Todo',
// });
