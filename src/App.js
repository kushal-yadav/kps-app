import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'

export default class App extends Component {
  organizationID = 649249007;
  authToken = 'db36e02a50b57e081efe533a8a0f834b';

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/contacts').then(res => res.json())
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
