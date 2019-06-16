import React, {Component} from 'react';

//events creator have in local state all the fields in the form;
//This way we can save on change and send it to create event method from the eventsContainer.
class EventsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        date: '',
        resident_id: '',
        description: ''
      }
      this.changeField = this.changeField.bind(this);
    }
  
    //still need to test this method!
    changeField(field, fieldName){
        return this.setState(state => {
            this.state[fieldName] = field;
            return this.state;
        })
    }
    render() {
        return (
            <div>
              <form className="eventsForm" onSubmit={(e)=>{this.props.createEvent(this.state.title, this.state.date, this.state.resident_id, this.state.description)}}>
                  <label>
                      Title:
                  </label>
                  <input type="text" name="title" id='title' onChange={(e)=>{this.changeField(e.target.value, e.target.id)}}/>
                  <label>
                      Date:
                  </label>
                  <input type="text" name="date" id="date" onChange={(e)=>{this.changeField(e.target.value, e.target.id)}}/>
                  <label>
                      Resident Id:
                  </label>
                  <input type="text" name="resident_id" defaultValue="null" id="resident_id" onChange={(e)=>{this.changeField(e.target.value, e.target.id)}}/>
                  <label>
                      Description:
                  </label>
                  <input type="text" name="description" id="description" onChange={(e)=>{this.changeField(e.target.value, e.target.id)}}/>
                  <input class="button" type="submit" value="Submit"/>
              </form>
            </div>
        );
    }
}

export default EventCreator;