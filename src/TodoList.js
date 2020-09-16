import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends React.Component{
  state = {
    todos:[]
  }
  render(){
    const {todos} = this.state;
    return (
      <div className="TodoList">
        <NewTodoForm/>
        {todos.map(todo=><Todo todo={todo}/>)}
      </div>
    )
  }
}


export default TodoList;
