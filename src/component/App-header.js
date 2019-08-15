import React, { Component } from 'react';
import './App-header.css';


export default class AppHeader extends Component {

  render() {

    return (
      <header className = "todo-list-main">
        <h1 className="todo-header">To Do App!</h1>
        <h2 className="todo-header2">Add New To-Do</h2>
        <div className="todo-list-body">
        <input className = "inputvalue" type="text" placeholder="Todo"
        onChange = {(e) => this.props.inputDataHandler(e.target.value)}></input>
        <button className = "btn" onClick={this.props.createNewTask}>Add New Item</button>
        </div>
      </header>
      
    )
  }
}