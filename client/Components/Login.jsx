import React from 'react';
import AptNum from './aptDropDown.jsx'
// let random = "username"
const LOGIN = props => {
  const aptDrop = [];
  props.aptList.forEach(apt => aptDrop.push(<AptNum key={'select' + apt} 
    apt={apt} aptSelect={props.aptSelect} />));

  return(
  <div key="loginPageMain" className="innerbox" id="loginMain">
    <div key="loginBox" id="loginBox">
      LOG IN:
      <form key="logForm" id="login" onSubmit={e => {
      e.preventDefault();
      props.signIn();
      }}>
        <input key="log1" type="text" id="username" value={props.username} placeholder="Username" onChange={e => props.updateUsername(e.target.value)} />
        <input key="log2" type="password" id="password" value={props.password} placeholder="Password" onChange={e => props.updatePassword(e.target.value)}/>
        <button key="log3" className="logButton" type="submit">Submit</button>
      </form>
    </div>
    <div key="signForm" id="sign">
      SIGN UP:
      <form key="signForm" id="submit" onSubmit={e => {
      e.preventDefault();
      props.signup();
        }}> 
        <input key="sign1" type="text" id="signUser" value={props.username} placeholder="Username" onChange={e => props.updateUsername(e.target.value)}/>
        <input key="sign2" type="password" id="signPass" value={props.password} placeholder="Password" onChange={e => props.updatePassword(e.target.value)}/>
        Apt#
        <select>
          {aptDrop}
        </select>
        Role
        <select>
          <option>Tenant</option>
          <option>Manager</option>
          <option>Maintenance</option>
          </select>
        <button key="sign3" className="logButton" type="submit">Submit</button>
      </form>
    </div>
  </div>
)};
export default LOGIN;