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

})

const mapDispatchToProps = dispatch => {
  // return an object
  return {

  }
}

class tenantContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav>
          <link to="/Payments" component={tenantPayments}></link>
          <link to="/Event" component={tenantEvents}></link>
        </nav>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(tenantContainer);
