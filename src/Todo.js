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

  render() {
    const { deleteTodo, todo, updateTodo } = this.props;
    const todoTextClass = todo.completed ? 'Todo-task completed ' : 'Todo-task';
    const { editMode } = this.state;
    return (
      <div className="Todo">
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

              <button className="todoDelete" aria-label="Delete Todo" onClick={() => deleteTodo(todo.id)}>
              <i class="far fa-trash-alt"></i>
              </button>
              <button className="todoEdit" aria-label="Edit Todo" onClick={this.handleClick}>
              <i class="fas fa-pencil-alt"></i>
              </button>

            <div className="todoButtonDivider"/>
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
