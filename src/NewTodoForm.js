import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends React.Component {
  state = {
    todo: this.props.todoText,
  };

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { todo } = this.state;
    this.props.addTodo({ todo, id: uuidv4() });
    this.setState({ todo: '' });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">{this.props.buttonText}</button>
          <label>{this.props.label}</label>
          <input
            name="todo"
            value={this.state.todo}
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
