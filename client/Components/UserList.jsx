import React from 'react';


function UserList(props) {
  let display = [];
  let userList = props.userList;
  userList.forEach(element => {
    display.push(<li className="listItemContainer" onClick={()=>{props.handleChange(element.user_id, element.name)}}><a className ='listItem' >{element.name}</a></li>)
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