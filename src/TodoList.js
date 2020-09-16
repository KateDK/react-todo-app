import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.addTodo} />
        {todos.map((item) => (
          <Todo todo={item.todo} key={item.id} id={item.id} />
        ))}
      </div>
    );
  }
}

export default TodoList;
