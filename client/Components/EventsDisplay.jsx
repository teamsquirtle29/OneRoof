import React, {Component} from 'react';

function EventsDisplay(props) {
    let display =[];
    let eventList = props.eventList;
    eventList.forEach((element, index) =>{
        let date;
        typeof element.date === 'string' ? date = new Date(element.date) : date = '';
        console.log(element.date)
        display.push(<li key={index} >
          <h3>{element.type}</h3>
          <p>{element.description}</p>
          <p>{date.toString()}</p>
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