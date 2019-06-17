import React, {Component} from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToSend: ''
    }
    this.updateMessage = this.updateMessage.bind(this);
    this.postMessage = this.postMessage.bind(this);
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
        <h4>Currently messaging: {this.props.receiverName}</h4>
        <div>
          {JSON.stringify(this.props.messages)}
        </div>
        <textarea onChange={this.updateMessage}></textarea>
        <button onClick={this.postMessage}>Send Message</button>
      </div>
    );
  }
}

export default Chat;