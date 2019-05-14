class Message {
  constructor(id, username, avatar, time, body) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.time = time;
    this.body = body;
  }
}

module.exports = Message;