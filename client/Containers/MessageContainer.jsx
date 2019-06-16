import React, {Component} from 'react';
import Chat from './../Components/Chat.jsx';
import UserList from './../Components/UserList.jsx';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Harcoding 1 because this is our manager in the DB and residents can only message the manager
      // If the manager wants to message someone else, they can choose that from the user list which will only render for them
      currentlyMessaging: 1
    }
    this.changeMessageReceiver = this.changeMessageReceiver.bind(this);
  }

  changeMessageReceiver(user) {
    this.setState({
      currentlyMessaging: user
    });
  }

  render() {
    return (
      <div>
        <Chat userId={this.props.userId} receiver={this.state.currentlyMessaging}/>
        {
          this.props.role === 'manager' &&
          <UserList handleChange={this.changeMessageReceiver} userList={this.props.userList}/>
        }
      </div>
    );
  }
}

export default MessageContainer;