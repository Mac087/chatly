import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(name) {
    this.setState({ username: name });
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route path="/" render={props => <Landing {...props} updateUsername={this.updateUsername} />} />
          <Route path="/dashboard" render={props => <Dashboard {...props} username={this.username} />} />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;