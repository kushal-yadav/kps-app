import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'

export default class App extends Component {
  API_URL = "https://kps-api.herokuapp.com";

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`${this.API_URL}/contacts`).then(res => res.json())
      .then(result => this.setState({ data: result.organizations }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.data.length > 0 &&
          <Table data={this.state.data} />
        }
      </div>
    );
  }
}
