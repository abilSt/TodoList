import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import All from './All';
import Search from "./Search";

export default class RouterMain extends Component {
  state = {
    data: this.props.data,
    search: []
  }

  allTask = () => {
    return (<All allData = {this.state.data}/>)
  }
  complete = () => {
    let arr = this.state.data.filter(item => item.isDone === true);
    return(<All allData = {arr} />)
  }
  incomplete = () => {
    let arr = this.state.data.filter(item => item.isDone === false);
    return(<All allData = {arr} />)
  }

  searchText = text => {
    console.log(text);
    let searchTextData = this.state.data.filter( item => {
      return item.text.toLowerCase().includes(text.toLowerCase());
    });
    console.log(searchTextData)
    this.setState({
      ...this.state,
      search: searchTextData
    })
  }

  showSearch = () => {
    return(<All allData = {this.state.search}/>)
  }
  render() {
    return (
      <Router>
        <Search searchText={this.searchText}/>
        <div className="app-component">
          <Link to="/"><button>All</button></Link>
          <Link to="/Complete"><button>Complete</button></Link>
          <Link to="/Incomplete"><button>Incomplete</button></Link>
          <Link to="/Search"><button>Search</button></Link>
          <div>
            <Route path="/" exact component={this.allTask} />
            <Route path="/Complete" component={this.complete} />
            <Route path="/Incomplete" component={this.incomplete} />
            <Route path="/Search" component={this.showSearch} />
          </div>
        </div>
      </Router>
    );
  }
}