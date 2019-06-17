import React, {Component} from 'react';

function EventsDisplay(props) {
    let display =[];
    let eventList = props.eventList;
    eventList.forEach((element, index) =>{
        display.push(<li key={index} >{JSON.stringify(element)}</li>);
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