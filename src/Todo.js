import React from 'react';
import './Todo.css';
import EditTodoForm from './EditTodoForm';

class Todo extends React.Component {
  state = {
    editMode: false,
  };
  handleClcick = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  hendleToggle = () => {
    const { toggleCompleteTodo, todo } = this.props;
    toggleCompleteTodo(todo);
  };

  render() {
    const { deleteTodo, todo, updateTodo } = this.props;
    const todoTextClass = todo.completed ? 'todoText completed' : 'todoText';
    const { editMode } = this.state;
    return (
      <div className="Todo">
        {editMode ? (
          <EditTodoForm
            todo={todo}
            label="Edit Todo "
            updateTodo={updateTodo}
            toggleEdit={this.handleClcick}
          />
        ) : (
          <span>
            <h2 className={todoTextClass} onClick={this.hendleToggle}>
              {todo.todoText}
            </h2>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={this.handleClcick}>Edit</button>
          </span>
        )}
      </div>
    );
  }
}

export default Todo;
