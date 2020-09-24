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

  deleteTodo = (todoId) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter((elm) => elm.id !== todoId);
    this.setState({ todos: filteredTodos });
  };

  updateTodo = (todo) => {
    const { id } = todo;
    const { todos } = this.state;
    let index;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) index = i;
    }
    todos[index] = { ...todo };
    this.setState({ todos });
  };

  toggleCompleteTodo = (todo) => {
    const { id, completed } = todo;
    const { todos } = this.state;

    let index;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) index = i;
    }
    todos[index] = { ...todo, completed: !completed };
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.addTodo} />
        {todos.map((item) => (
          <Todo
            updateTodo={this.updateTodo}
            todo={item}
            key={item.id}
            id={item.id}
            deleteTodo={this.deleteTodo}
            toggleCompleteTodo={this.toggleCompleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
