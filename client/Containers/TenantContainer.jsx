import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import * as userActions from '../Actions/userActions.js';
import * as manActions from '../Actions/manActions.js';
import ManContainer from './ManContainer.jsx';
import TenantContainer from './TenantContainer.jsx';
import { bindActionCreators } from 'redux';
import tenantPayments from '../Components/tenantPayments';
import tenantEvents from '../Components/tenantEvents';


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

class tenantContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events : []
    };
  }

  render() {
    return (
      <div>
        <nav>
          <link to="/Pay">Rent</link>
          <link to="/Events">Events</link>
        </nav>
        <main>
          <Route path='Pay' userId={this.props.userId} aptId={this.props.aptId} component={tenantPayments}></Route>
          <Route path='Events' eventList={this.state.events} component={tenantEvents}></Route>
        </main>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(tenantContainer);
