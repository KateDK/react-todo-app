import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './HOCTodoForm.css';

const makeNewBlankToDo = () => {
  return { todoText: '', completed: false, important: false, id: uuidv4() };
};

export default class TodoForm extends React.Component {
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
    console.log('IM triggered from here');
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
    const { todo } = this.state;

    return (
      <div>
        {this.props.render({
          todo,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
        })}
      </div>
    );
  }
}
