import React, {Component} from 'react';
import MessageContainer from './MessageContainer.jsx';

class ManContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MessageContainer />
      </div>
    );
  } 
}

export default ManContainer;