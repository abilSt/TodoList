import React from 'react';
import './Task.css'

class Task extends React.Component {
  render() {
  let className = "";
  if (this.props.status) {
    className += " s";
  } else {
    className = '';
  }
  let nameB = "";
  if (this.props.status) {
    nameB += "Undo";
  } else {
    nameB = 'Done';
  }

  return (
    <li className="letsget">
      <button className="btndone btndonesize" onClick={this.props.delete}>Delete</button>
      <button className="btndone btndonesize" onClick={this.props.done}>{nameB}</button>
      <span className={className}>{this.props.text}</span>
    </li>
  );
}
}
export default Task;