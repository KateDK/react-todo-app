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

  render() {
    const { deleteTodo, todo, updateTodo } = this.props;
    //console.log('todo in TODO: ', todo);
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
            <h2>{todo.todoText}</h2>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={this.handleClcick}>Edit</button>
          </span>
        )}
      </div>
    );
  }
}

export default Todo;
