import React, {Component} from 'react';

function EventsDisplay(props) {
    let display =[];
    let eventList = props.eventList;
    eventList.forEach(element =>{
        display.push(<li>{element}</li>);
    })
    return (
      <div>
          <ul>
            {display}
          </ul>
      </div>
    );
}

export default EventsDisplay;