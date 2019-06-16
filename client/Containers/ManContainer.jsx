import React, {Component} from 'react';
import MessageContainer from './MessageContainer.jsx';

class ManContainer extends Component {
  constructor(props) {
    super(props);
  }

  //component did mount get all users and save eventsList and UserList in props and send to respective components.
  render() {
    // routes for <MessageContainer userList={this.props.userList}/>
    // <EventsContainer eventsList={this.props.eventsList}/>
    return (
      <div>
      </div>
    );
  } 
}

export default ManContainer;