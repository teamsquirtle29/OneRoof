import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import Login from '../components/Login.jsx';
import * as actions from '../Actions/actions.js';
import ManContainer from './ManContainer.jsx';
import TenantContainer from './TenantContainer.jsx';
import { bindActionCreators } from 'redux';
import ManContainer from './ManContainer.jsx';
import UserContainer from './UserContainer.jsx';

const mapStateToProps = ({ lessons }) => ({
  // add pertinent state here

});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let Display = [];
    
    const ManContainer = <ManContainer key="mainCon1" />
    const TenantContainer = <UserContainer key="mainCon2" />

    if(this.props.role === 'manager'){
      Display.push(ManContainer);
    } else if(this.props.role === 'tenant') Display.push(TenantContainer);

    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Welcome to 1Roof {this.props.username}</h1>
          { Display }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);