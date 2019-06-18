import React, {Component} from 'react';

//events creator have in local state all the fields in the form;
//This way we can save on change and send it to create event method from the eventsContainer.
class EventCreator extends Component {
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
        console.log(this.state);
        return this.setState(state => ({
            [fieldName] : field
        }))
    }
    render() {
        console.log(this.props.userList);
        const userDisplay = [];
        this.props.userList.forEach(element => {
            userDisplay.push(<option name="resident_id" id="resident_id" value={element._id}>{element.name}</option>);
        })
        return (
            <div>
                  <label>
                      Title:
                  </label>
                  <input type="text" name="title" id='title' onChange={(e)=>{this.changeField(e.target.value, 'title')}}/>
                  <label>
                      Date:
                  </label>
                  <input type="text" name="date" id="date" onChange={(e)=>{this.changeField(e.target.value, 'date')}}/>
                  <label>
                      Tenant Id:
                  </label>
                  <select value={this.resident_id} onChange={(e)=>{this.changeField(e.target.value, 'resident_id')}} >
                        <option>
                            Select
                        </option>
                        {userDisplay}
                  </select>
                  <label>
                      Description:
                  </label>
                  <input type="text" name="description" id="description" onChange={(e)=>{this.changeField(e.target.value, 'description')}}/>
                  <button onClick={(e)=>{console.log('YOOO'); this.props.createEvent(this.state.title, this.state.date, this.state.resident_id, this.state.description)}}>Submit</button>
            </div>
        );
    }
}

export default EventCreator;