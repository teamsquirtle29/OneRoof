import React, {Component} from 'react';
import EventCreator from './../Components/EventCreator.jsx';
import EventsDisplay from './../Components/EventsDisplay.jsx';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.CreateEvent = this.CreateEvent.bind(this);
    this.UpdateEvents = this.UpdateEvents.bind(this);
  }

  componentDidMount(){
    this.UpdateEvents();
  }
    //might need to check the id we are sending to update events!
    //update events updates the eventslist sent as props from the container before it!
  UpdateEvents(){
    fetch('/event', {
        method:'GET',
        headers: {'Content-Type': 'application/json','resident_id':`${this.props.id}`, 'role':`${this.props.role}`}
      })
    .then(res => {
      return res.json();
    })
    .then(data =>{
        return this.setState(state=>{
            this.state.eventsList = data;
            return this.state;
        })
    })
  }

  //createEvent method for managers followed by a state update to re render the container with new event
  createEvent(date, description, title, id){
      fetch('/event', {
          method: 'POST',
          body: {
              'date': date,
              'description': description,
              'type': title,
              'resident_id': id
          }
      })
      .then(res => {
        this.UpdateEvents();
      })
  }

  render() {
    return (
      <div>
          <EventsDisplay eventsList = {this.props.eventsList}/>
        {
          this.props.role === 'management' &&
          <EventCreator eventsList = {this.props.eventsList} createEvent = {this.createEvent}/>
        }
      </div>
    );
  }
}

export default EventsContainer;