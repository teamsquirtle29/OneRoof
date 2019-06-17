import React, {Component} from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageToSend: ''
    }
    this.updateMessage = this.updateMessage.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  componentDidMount() {
    fetch('/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sender_id: this.props.userId,
        receiver_id: this.props.receiver
      }
    })
    .then(res => res.json())
    .then(res => this.setState({
      messages: res
    }))
    .catch(err => console.log(err));
  }

  updateMessage(e) {
    this.setState({
      messageToSend: e.target.value
    })
  }

  postMessage(e) {
    e.preventDefault();
    if (this.state.messageToSend !== '') {
      fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.state.messageToSend,
          sender_id: this.props.userId,
          receiver_id: this.props.receiver,
          timestamp: null
        })
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.messages}
        </div>
        <textarea onChange={this.updateMessage}></textarea>
        <button onClick={this.postMessage}>Send Message</button>
      </div>
    );
  }
}

export default Chat;