import React, {Component} from 'react';
import Chat from './../Components/Chat.jsx';
import UserList from './../Components/UserList.jsx';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}

export default MessageContainer;