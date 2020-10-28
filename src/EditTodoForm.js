import React from 'react';
import './EditTodoForm.css'

class EditTodoForm extends React.Component {
  state = {
    currentTodo: {...this.props.todo},
  };

  handleChange = (event) => {
    const {id} = this.state.currentTodo;
    this.setState({ currentTodo:{todoText:event.target.value,id}});
  };

  handleSubmit = (event) => {
    const {toggleEdit} = this.props;
    event.preventDefault();
    const { currentTodo } = this.state;
    this.props.updateTodo({ ...currentTodo });
    toggleEdit();
  };

  render() {
    const {todoText} = this.state.currentTodo;
    return (
      <div className="EditTodoForm">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" disabled={todoText===''}>Save</button>
          <label hidden>Edit Todo </label>
          <input
            name="todo"
            value={todoText}
            type="text"
            onChange={this.handleChange}
            placeholder="Edit Todo "
          />
        </form>
      </div>
    );
  }
}

export default EditTodoForm;
