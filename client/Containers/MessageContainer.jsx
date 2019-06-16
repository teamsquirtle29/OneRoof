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

  changeMessageReceiver(id) {
    this.setState({
      currentlyMessaging: id
    });
  }

  render() {
    return (
      <div>
        <Chat id={this.props.id} receiver={this.state.currentlyMessaging}/>
        {/* {
          this.props.role === 'management' &&
          <UserList handleChange={this.changeMessageReceiver}/>
        } */}
      </div>
    );
  }
}

export default MessageContainer;