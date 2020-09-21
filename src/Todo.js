import React from 'react';
import './Todo.css';
import NewTodoForm from './NewTodoForm';

class Todo extends React.Component {
  state = {
    editMode: false,
  };
  handleClcick = () => {
    this.setState({ editMode: !this.state.editMode });
  };
  render() {
    const { deleteTodo, todo, id, addTodo } = this.props;
    const { editMode } = this.state;
    return (
      <div className="Todo">
        {editMode ? (
          <NewTodoForm
            addTodo={addTodo}
            todoText={todo}
            buttonText="Save"
            label="Edit Todo "
          />
        ) : (
          <span>
            <h2>{todo}</h2>
            <button onClick={() => deleteTodo(id)}>X</button>
            <button onClick={this.handleClcick}>Edit</button>
          </span>
        )}
      </div>
    );
  }
}

export default Todo;
