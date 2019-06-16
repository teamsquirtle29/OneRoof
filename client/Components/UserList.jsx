import React from 'react';


function UserList(props) {
  let display = [];
  let userList = this.props.userList;
  userList.array.forEach(element => {
    display.push(<li className ='listItem' onClick={(e)=>{this.props.changeMessageReceiver(e, element.user_id)}}>{element.userName}</li>)
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