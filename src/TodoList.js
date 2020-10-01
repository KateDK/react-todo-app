import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  deleteTodo = (todoId) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((elm) => elm.id !== todoId) });
  };

  updateTodo = (todo) => {
    const { id } = todo;
    const { todos } = this.state;

    const updatedTodos = todos.map(todoItem=>{
      if(todoItem.id === id){
        return {...todo}
      }else{
        return todoItem
      }
    })

    this.setState({ todos: updatedTodos });
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
        <h1>Todo List <span>Get stuff done</span></h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <Todo
              updateTodo={this.updateTodo}
              todo={item}
              id={item.id}
              deleteTodo={this.deleteTodo}
              toggleCompleteTodo={this.toggleCompleteTodo}
            />
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
