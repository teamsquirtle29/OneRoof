import React, {Component} from 'react';
import EventCreator from './../Components/EventCreator.jsx';
import EventsDisplay from './../Components/EventsDisplay.jsx';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    }
    this.CreateEvent = this.CreateEvent.bind(this);
    this.UpdateEvents = this.UpdateEvents.bind(this);
  }

  componentDidMount(){
    this.UpdateEvents();

  }
  //   might need to check the id we are sending to update events!
  //   update events updates the eventslist sent as props from the container before it!
  UpdateEvents(){
    fetch('/event', {
        method:'GET',
        headers: {'Content-Type': 'application/json','user_id':`${this.props.userId}`, 'role':`${this.props.role}`}
      })
    .then(res => {
      return res.json();
    })
    .then(data =>{
        return this.setState(state => {
            this.state.eventList = data;
            return this.state;
        })
    })
    .then(() =>{
      return;
      })
  }

  //createEvent method for managers followed by a state update to re render the container with new event
  CreateEvent(title, date, resident_id, description){
      fetch('/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              'date': date || null,
              'description': description,
              'type': title,
              'resident_id': resident_id || -1
          })
      })
      .then(() => {
        this.UpdateEvents();
      })
  }

  render() {
    return (
      <div>
          <EventsDisplay eventList = {this.state.eventList}/>
        {
          this.props.role === 'Manager' &&
          <EventCreator eventList = {this.state.eventList} userList={this.props.userList} createEvent={this.CreateEvent}/>
        }
      </div>
    );
  }
}

export default EventsContainer;