import React from 'react';
import Task from './Task';

import './TodoList.css';

class TodoList extends React.Component {

  render() {
  return (
    <div className = "todo-list-body">
      <ul>
        {this.props.tasks.map((item, index) => 
        <Task
        key = {index} 
        text = {item.text}
        status = {item.isDone}
        done = {() => this.props.isDoneStatus(index)}
        delete = {() => this.props.deleteItem(index)}
        />)}
      </ul>
    </div>
  )
}
}

export default TodoList;