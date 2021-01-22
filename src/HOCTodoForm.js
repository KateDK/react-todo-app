import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './HOCTodoForm.css';

const makeNewBlankToDo = () => {
  return { todoText: '', completed: false, important: false, id: uuidv4() };
};

class TodoForm extends React.Component {
  state = {
    todo: this.props.todo || makeNewBlankToDo(),
    newTodo: this.props.todo ? false : true,
  };

  handleChange = (event) => {
    const { todo } = this.state;
    this.setState({
      todo: { ...todo, todoText: event.target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { todo, newTodo } = this.state;
    if (newTodo) {
      this.props.addTodo(todo);
      this.setState({
        todo: makeNewBlankToDo(),
      });
    } else {
      const { toggleEdit } = this.props;

      this.props.updateTodo({ ...todo });
      toggleEdit();
    }
  };

  render() {
    const disabled = this.state.todo.todoText === '';
    const { component: C, defaultOnValue, ...props } = this.props;
    return (
      <C
        disabled={disabled}
        todo={this.state.todo}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...props}
      />
    );
  }
}

export function HOCTodoForm(component, optionsObj) {
  return function (props) {
    return (
      <TodoForm
        {...props}
        component={component}
        buttonText={optionsObj.buttonText}
        labelText={optionsObj.labelText}
        placeholder={optionsObj.placeholder}
      />
    );
  };
}
