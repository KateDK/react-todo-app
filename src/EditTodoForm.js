import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class EditTodoForm extends React.Component {
  state = {
    todo: {...this.props.todo},
  };

  handleChange = (event) => {
    const {id} = this.state.todo;
    this.setState({ todo:{todoText:event.target.value,id}});
  };

  handleSubmit = (event) => {
    const {toggleEdit} = this.props;
    event.preventDefault();
    const { todo } = this.state;
    this.props.updateTodo({ todo });
    toggleEdit();
  };

  render() {
    const {todoText} = this.state.todo;
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Save</button>
          <label>Edit Todo </label>
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
