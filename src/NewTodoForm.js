import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';
class NewTodoForm extends React.Component {
  state = {
    todoText: '',
  };

  handleChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { todoText } = this.state;
    this.props.addTodo({ todoText, id: uuidv4(), completed: false });
    this.setState({ todoText: '' });
  };

  render() {
    const disabled = this.state.todoText==='';
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" disabled={disabled}>Add</button>
          <label hidden>New Todo: </label>
          <input
            name="todo"
            value={this.state.todoText}
            type="text"
            onChange={this.handleChange}
            placeholder="New Todo"
          />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
