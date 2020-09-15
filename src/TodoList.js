import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends React.Component{
  state = {
    todos:[]
  }
  render(){
    return (
      <div className="TodoList">
        <NewTodoForm/>
        <Todo/>
      </div>
    )
  }
}


export default TodoList;
