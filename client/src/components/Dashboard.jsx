import React, { Component } from 'react';
import '../styles/Dashboard.css';

// Import Components
import Namespaces from '../components/Namespaces.jsx';
import Chatroom from '../components/Chatroom.jsx';

// Import Namespaces
import initNS from '../helpers/namespaces';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      avatar: '',
      namespaces: initNS,
      currentNs: 0,
      currentRoom: 0
    };

    this.handleNs = this.handleNs.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
    this.handleNewMsg = this.handleNewMsg.bind(this);
  }

  componentDidMount() {
    // Set random avatar for user
    const rand = Math.floor(Math.random() * 4) + 1;
    const avatar = require(`../assets/square-${rand}.png`);
    this.setState({ avatar });
  }

  handleNs(e) {
    const newIndex = parseInt(e.target.getAttribute('id'), 10);
    this.setState({ currentNs: newIndex, currentRoom: 0 });
  }

  handleRoom(e) {
    const newIndex = parseInt(e.target.getAttribute('id'), 10);
    this.setState({ currentRoom: newIndex });
  }

  handleNewMsg() {
    //Needs to be updated to reflect back end logic
  }

  render() {
    const messages = this.state.namespaces[this.state.currentNs].rooms[this.state.currentRoom].history;
    return (
      <div className="container-fluid box">
        <div className="row box">
          <Namespaces namespaces={this.state.namespaces} currentNs={this.state.currentNs} handleNs={this.handleNs} handleRoom={this.handleRoom} />
          <Chatroom avatar={this.state.avatar} messages={messages} handleNewMsg={this.handleNewMsg} />
        </div>
      </div>
    );
  }

}

export default Dashboard;