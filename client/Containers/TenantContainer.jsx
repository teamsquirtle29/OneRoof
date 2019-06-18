import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MessageContainer from './MessageContainer.jsx';
import PaymentContainer from './PaymentContainer.jsx';
import EventsContainer from './EventsContainer.jsx';



const mapStateToProps = store => ({
  role: store.user.role,
  userId: store.user.userId,
  aptId: store.user.aptId
})

const mapDispatchToProps = dispatch => {
  // return an object
  return {

  }
}

class TenantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventList : []
    };
  }

  componentDidMount (){
    fetch('/event', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        user_id: this.props.userId,
        role: this.props.role
      }
    })
      .then(res => res.json())
      .then(res => this.setState({
        eventList: res
      }))
  }

  render() {
    return (
    <Router>
      <div>
        <nav>
          <Link to={"/payments"}>Payments</Link>
          <Link to={"/events"}>Events</Link>
          <Link to={"/chat"}>Messages</Link>
        </nav>
          <main>
            <Route path="/payments" render={(props) => <PaymentContainer aptId={this.props.aptId} aptList={this.props.aptList} userId={this.props.userId} role={this.props.role} isAuthed={true} />} />
            <Route path="/chat" render={(props) => <MessageContainer userId={this.props.userId} role={this.props.role} isAuthed={true} />} />
            <Route path="/events" render={(props) => <EventsContainer userId={this.props.userId} role={this.props.role} eventsList={this.state.eventList} isAuthed={true} />} />
          </main>
      </div>
    </Router>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TenantContainer);
