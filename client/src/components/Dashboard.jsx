import React, { Component } from 'react';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    };
  }

  render() {
    return (
      <div class="container-fluid box">
        <div class="row box">
          <div class="col-1 namespaces">
            <div class="namespace center-block text-center mt-3" ns="/wiki"><img class="icon" alt="Astronaut Icon" src="./assets/astronaut.svg" /></div>
            <div class="namespace center-block text-center mt-3 yolo" ns="/mozilla"><img class="icon" alt="Asteroid Icon" src="./assets/asteroid.svg" /></div>
          </div>
          <div class="col-2 rooms">
            <h6 class="text-center mt-3 text-muted">Channels</h6>
            <ul class="room-list">
              <li><i class="fab fa-slack-hash"></i> General</li>
              <li><i class="fab fa-slack-hash"></i> Events</li>
            </ul>
          </div>
          <div class="col-9 message-form">
            <div class="room-header row mb-4">
              <div class="col-3 d-inline-block my-auto"><span class="curr-room-text">General Channel</span> <span class="curr-room-num-users">Users 3 <i class="fas fa-user"></i></span></div>
            </div>
            <div>
              <ul id="messages" class="col-sm-12">
                <li>
                  <div class="user-image">
                    <img alt="User Icon" src="./assets/square-1.png" />
                  </div>
                  <div class="user-message ml-2">
                    <div class="user-name-time font-weight-bold">John <span>1:25 pm</span></div>
                    <div class="message-text">I went running today.</div>
                  </div>
                </li>

                <li>
                  <div class="user-image">
                    <img alt="User Icon" src="./assets/square-2.png" />
                  </div>
                  <div class="user-message ml-2">
                    <div class="user-name-time font-weight-bold">Mike <span>2:25 pm</span></div>
                    <div class="message-text">I'm getting my tires changed this afternoon.</div>
                  </div>
                </li>
                <li>
                  <div class="user-image">
                    <img alt="User Icon" src="./assets/square-3.png" />
                  </div>
                  <div class="user-message ml-2">
                    <div class="user-name-time font-weight-bold">Tracy <span>2:26 pm</span></div>
                    <div class="message-text">Hello everyone!</div>
                  </div>
                </li>

              </ul>
            </div>
            <form id="user-input">
              <div class="col-12">
                <input id="user-message" class="form-control" type="text" placeholder="Enter your message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Dashboard;