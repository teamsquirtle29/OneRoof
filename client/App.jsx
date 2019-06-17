import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContainer from './Containers/MainContainer.jsx'
import Login from './Components/login.jsx';
import * as userActions from './Actions/userActions.js';


const mapStateToProps = store => ({
  // add pertinent state here
  username: store.user.username,
  password: store.user.password,
  role: store.user.role,
  login: store.user.login,
  apt: store.user.apt,
  aptList: store.user.aptList
});


const mapDispatchToProps = dispatch => ({
  updateUsername: (name) => dispatch(userActions.updateUsername(name)),
  updatePassword: (pass) => dispatch(userActions.updatePassword(pass)),
  signup: () => dispatch(userActions.signup()),
  signIn: () => dispatch(userActions.signIn()),
  updateApt: (apt) => dispatch(userActions.updateApt(apt)),
  updateRole: (role) => dispatch(userActions.updateRole(role)),
})

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const logComponent = <Login signIn={this.props.signIn} apt={this.props.apt} role={this.props.role} username={this.props.username} password={this.props.password} 
    aptList={this.props.aptList} updateApt={this.props.updateApt} updateRole={this.props.updateRole} updateUsername={this.props.updateUsername} updatePassword={this.props.updatePassword} signup={this.props.signup}/>;

    const mainContainer = <MainContainer key="mainCon2" />;


    return(
      <div className="App">
        <h1>Welcome to 1Roof</h1>
        { this.props.login === false ? logComponent : mainContainer }
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);