import React from 'react';


function UserList(props) {
  let display = [];
  let userList = this.props.userList;
  userList.forEach(element => {
    display.push(<li className ='listItem' onClick={(e)=>{this.props.changeMessageReceiver(element.userId)}}>{element.username}</li>)
  });
  return (
    <div>
      <ul>
        {display}
      </ul>
    </div>
  );
}

export default UserList;