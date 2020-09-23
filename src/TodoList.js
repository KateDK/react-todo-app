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

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <NewTodoForm addTodo={this.addTodo} />
        {todos.map((item) => (
          <Todo
            todo={item}
            key={item.id}
            id={item.id}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
