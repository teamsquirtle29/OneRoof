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
        console.log(data);
        return this.setState(state => {
            this.state.eventList = data;
            return this.state;
        })
    })
    .then(() =>{
      console.log(this.state.eventList);
      return;
      })
  }

  //createEvent method for managers followed by a state update to re render the container with new event
  CreateEvent(date, description, title){
      fetch('/event', {
          method: 'POST',
          body: {
              'date': date,
              'description': description,
              'type': title,
              'resident_id': this.state.resident_id
          }
      })
      .then(res => {
        this.UpdateEvents();
      })
  }

  render() {
    return (
      <div>
        Test
          <EventsDisplay eventList = {this.state.eventList}/>
        {
          this.props.role === 'Manager' &&
          <EventCreator eventList = {this.state.eventList} createEvent = {this.CreateEvent}/>
        }
      </div>
    );
  }
}

export default EventsContainer;