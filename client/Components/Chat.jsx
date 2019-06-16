import React, {Component} from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    fetch('/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sender_id: this.props.id,
        receiver_id: this.props.receiver
      }
    })
  }

  render() {
    return (
      <div>
        <div>
        </div>
        <input type="text"></input>
        <button>Send Message</button>
      </div>
    );
  }
}

export default Chat;