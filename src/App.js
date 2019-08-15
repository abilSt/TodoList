import React from 'react';
import AppHeader from './component/App-header';
import RouterMain from './component/Router';

class App extends React.Component {
  state = {
    data: [{
      text: "Hello",
      isDone:false
  }],
  inputData:"",
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
      <div className="App">
        <AppHeader 
        inputDataHandler={this.inputDataHandler}
        createNewTask={this.createNewTask}
        />
          <RouterMain data={this.state.data}/>
      </div>
    );
  }
}

export default App;



