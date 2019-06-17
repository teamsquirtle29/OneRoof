import React, {Component} from 'react';

function EventsDisplay(props) {
    let display =[];
    let eventList = props.eventList;
    eventList.forEach((element, index) =>{
        display.push(<li key={index} >
          <h3>{element.type}</h3>
          <p>{element.description}</p>
          <p>{element.date}</p>
        </li>);
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