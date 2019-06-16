import React, {Component} from 'react';

function EventsDisplay(props) {
    let display =[];
    let eventsList = this.props.eventsList;
    eventsList.forEach(element =>{
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