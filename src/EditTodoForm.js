import React from 'react';
import './EditTodoForm.css'

class EditTodoForm extends React.Component {
  state = {
    curentTodo: {...this.props.todo},
  };

  handleChange = (event) => {
    const {id} = this.state.curentTodo;
    this.setState({ curentTodo:{todoText:event.target.value,id}});
  };

  handleSubmit = (event) => {
    const {toggleEdit} = this.props;
    event.preventDefault();
    const { curentTodo } = this.state;
    this.props.updateTodo({ ...curentTodo });
    toggleEdit();
  };

  render() {
    const {todoText} = this.state.curentTodo;
    return (
      <div className="EditTodoForm">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Save</button>
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
