import React from 'react';
import './Todo.css';
import EditTodoForm from './EditTodoForm';

class Todo extends React.Component {
  state = {
    editMode: false,
  };
  handleClick = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  handleToggle = () => {
    const { toggleCompleteTodo, todo } = this.props;
    toggleCompleteTodo(todo);
  };

  handleToggleTodoImportant = () => {
    const { toggleTodoImportant, todo } = this.props;
    toggleTodoImportant(todo);
  };

  makeClassNames = () => {
    const { todo } = this.props;
    let todoClass;
    let todoTextClass;
    let importantStatus;
    if (todo.completed) {
      todoClass = 'Todo completedTodo';
      todoTextClass = 'Todo-task completed';
    } else {
      todoClass = 'Todo';
      todoTextClass = 'Todo-task';
    }
    if (todo.important) {
      importantStatus = 'fas fa-star';
    } else {
      importantStatus = 'far fa-star';
    }
    return { todoClass, todoTextClass, importantStatus };
  };

  render() {
    const { deleteTodo, todo, updateTodo } = this.props;
    const classNames = this.makeClassNames();
    const todoClass = classNames.todoClass;
    const todoTextClass = classNames.todoTextClass;
    const { importantStatus } = classNames;
    const todoToggle = todo.completed ? (
      <i className="fas fa-check-square"></i>
    ) : (
      <i className="far fa-check-square"></i>
    );
    const { editMode } = this.state;
    return (
      <div className={todoClass}>
        {editMode ? (
          <span>
            <EditTodoForm
              todo={todo}
              label="Edit Todo "
              updateTodo={updateTodo}
              toggleEdit={this.handleClick}
            />
          </span>
        ) : (
          <span>
            <button
              className="todoDelete"
              aria-label="Delete Todo"
              onClick={() => deleteTodo(todo.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>
            <button
              className="todoEdit"
              aria-label="Edit Todo"
              onClick={this.handleClick}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>

            <button
              className="todoImportant"
              aria-label="Important Todo"
              onClick={this.handleToggleTodoImportant}
            >
              <i className={importantStatus}></i>
            </button>

            <button
              className="todoToggle"
              aria-label="Toggle Todo"
              onClick={this.handleToggle}
            >
              {todoToggle}
            </button>
            <div className="todoButtonDivider" />
            <h2 className={todoTextClass} onClick={this.handleToggle}>
              {todo.todoText}
            </h2>
          </span>
        )}
      </div>
    );
  }
}

export default Todo;
