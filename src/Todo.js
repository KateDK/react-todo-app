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
    const todoTextClass = todo.completed ? 'Todo-task completed ' : 'Todo-task';
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
            <button className="todoDelete" onClick={() => deleteTodo(todo.id)}>
              X
            </button>
            <button className="todoEdit" onClick={this.handleClcick}>
              Edit
            </button>
            <h2 className={todoTextClass} onClick={this.hendleToggle}>
              {todo.todoText}
            </h2>
          </span>
        )}
      </div>
    );
  }
}

export default Todo;
