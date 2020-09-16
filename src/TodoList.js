import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends React.Component {
  state = {
    todos: [],
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <NewTodoForm />
        {todos.map((todo) => (
          <Todo todo={todo} key={uuidv4()} />
        ))}
      </div>
    );
  }
}

export default TodoList;
