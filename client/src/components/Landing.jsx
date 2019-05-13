import React, { useState } from 'react';
import '../styles/Landing.css';

function Landing({ updateUsername, history }) {

  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!username) return;
    updateUsername(username);
    history.push('/dashboard');
  }

  return (
    <div className="container-fluid' main">
      <div className="row main-row">
        <div className="centered">
          <div className="form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h4>Login to our site</h4>
                <p>Enter any username to access the chat room:</p>
              </div>
              <div className="form-top-right">
                <i className="fas fa-pencil-alt"></i>
              </div>
            </div>
            <div className="form-bottom">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="sr-only" htmlFor="form-username">Username</label>
                  <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button type="submit" className="btns">Enter!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;