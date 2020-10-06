import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem('todos'));
    this.setState({todos: data ? data : []});
  }

  addTodo = (newTodo) => {
    const newTodos = [...this.state.todos, newTodo];
    this.setState({ todos: newTodos });
    localStorage.setItem('todos',JSON.stringify(newTodos));
  };

  deleteTodo = (todoId) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter((elm) => elm.id !== todoId);
    this.setState({ todos: filteredTodos });
    localStorage.setItem('todos',JSON.stringify(filteredTodos));

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
    localStorage.setItem('todos',JSON.stringify(updatedTodos));

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
    localStorage.setItem('todos',JSON.stringify(todos));

  };

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <h1>Todo List <span>Get stuff done</span></h1>
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
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
