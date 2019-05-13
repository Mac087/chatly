import React, { Component } from 'react';
import '../styles/Dashboard.css';

// Import Components
import Namespaces from '../components/Namespaces.jsx'

// Import Namespaces
import initNS from '../helpers/namespaces';


// Import Images
// import astronaut from '../assets/astronaut.svg';
// import asteroid from '../assets/asteroid.svg';
import userIcon1 from '../assets/square-1.png';
import userIcon2 from '../assets/square-2.png';
import userIcon3 from '../assets/square-3.png';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      namespaces: initNS,
      currentNs: 0,
      currentRoom: 0
    };

    this.handleNs = this.handleNs.bind(this);
    this.handleRoom = this.handleRoom.bind(this);
  }

  componentDidMount() {

  }

  handleNs(e) {
    // this.setState({ [e.target.name]: e.target.id });
    console.log('NS: ', e.target.getAttribute('id'));
  }

  handleRoom(e) {
    //console.log('Room: ', e.target.getAttribute('key'));
    console.log('Room: ', e.target.key);
  }

  render() {
    return (
      <div className="container-fluid box">
        <div className="row box">
          {/* <div className="col-1 namespaces">
            <div className="namespace center-block text-center mt-3" ns="/wiki"><img className="icon" alt="Astronaut Icon" src={astronaut} /></div>
            <div className="namespace center-block text-center mt-3 yolo" ns="/mozilla"><img className="icon" alt="Asteroid Icon" src={asteroid} /></div>
          </div>
          <div className="col-2 rooms">
            <h6 className="text-center mt-3 text-muted">Channels</h6>
            <ul className="room-list">
              <li><i className="fab fa-slack-hash"></i> General</li>
              <li><i className="fab fa-slack-hash"></i> Events</li>
            </ul>
          </div> */}
          <Namespaces namespaces={this.state.namespaces} currentNs={this.state.currentNs} handleNs={this.handleNs} handleRoom={this.handleRoom} />
          <div className="col-9 message-form">
            <div className="room-header row mb-4">
              <div className="col-3 d-inline-block my-auto"><span className="curr-room-text">General Channel</span> <span className="curr-room-num-users">Users 3 <i className="fas fa-user"></i></span></div>
            </div>
            <div>
              <ul id="messages" className="col-sm-12">
                <li>
                  <div className="user-image">
                    <img alt="User Icon" src={userIcon1} />
                  </div>
                  <div className="user-message ml-2">
                    <div className="user-name-time font-weight-bold">John <span>1:25 pm</span></div>
                    <div className="message-text">I went running today.</div>
                  </div>
                </li>

                <li>
                  <div className="user-image">
                    <img alt="User Icon" src={userIcon2} />
                  </div>
                  <div className="user-message ml-2">
                    <div className="user-name-time font-weight-bold">Mike <span>2:25 pm</span></div>
                    <div className="message-text">I'm getting my tires changed this afternoon.</div>
                  </div>
                </li>
                <li>
                  <div className="user-image">
                    <img alt="User Icon" src={userIcon3} />
                  </div>
                  <div className="user-message ml-2">
                    <div className="user-name-time font-weight-bold">Tracy <span>2:26 pm</span></div>
                    <div className="message-text">Hello everyone!</div>
                  </div>
                </li>

              </ul>
            </div>
            <form id="user-input">
              <div className="col-12">
                <input id="user-message" className="form-control" type="text" placeholder="Enter your message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Dashboard;