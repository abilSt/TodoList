import React from 'react';
import Task from './Task';


export default class All extends React.Component {

  state = {
        data: this.props.allData
      }
    
      inputDataHandler = (text) => {
        this.setState({...this.state, inputData: text})
      }
      createNewTask = () => {
        const newTask = this.state.data
        newTask.push({text: this.state.inputData, isDone: false})
        this.setState({...this.state, data: newTask})
      }
      isDoneStatus = (index) => {  
        const newArr = this.state;
        newArr.data[index].isDone = !newArr.data[index].isDone;
        this.setState(newArr)
        console.log(newArr.data[index].isDone)
      }
      deleteTodo = (index) => {
        const deleteItem = this.state.data;
        deleteItem.splice(index, 1);
        this.setState(deleteItem);
        console.log(deleteItem)
      }
  render() {
  return (
    <div className = "todo-list-body">
      <ul>
        {this.props.allData.map((item, index) => 
        <Task
        key = {index} 
        text = {item.text}
        status = {item.isDone}
        done = {() => this.isDoneStatus(index)}
        delete = {() => this.deleteTodo(index)}
        />)}
      </ul>
    </div>
  )
}
}

