import React from 'react';

class NewTodoForm extends React.Component{
  state={
    todo:"",
  }

  handleChange = (event)=>{
    this.setState({todo: event.target.value});
  }
  render(){
    return(
      <div className="NewTodoForm">
        <form>
          <label>New todo: </label>
          <input name="todo" value={this.state.todo} type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default NewTodoForm;
