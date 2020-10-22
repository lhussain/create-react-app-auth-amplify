import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
  "aws_project_region": "eu-west-1",
  "aws_cognito_identity_pool_id": "eu-west-1:00852205-c605-4ad1-8d1d-e0d00c184df0",
  "aws_cognito_region": "eu-west-1",
  "aws_user_pools_id": "eu-west-1_kD4fI57R5",
  "aws_user_pools_web_client_id": "5s439moh8i6kg39oot0q19t8mp",
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
