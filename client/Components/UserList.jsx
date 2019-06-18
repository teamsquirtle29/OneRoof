import React from 'react';


function UserList(props) {
  console.log('userlist props', props);
  let display = [];
  let userList = props.userList;
  userList.forEach(element => {
    console.log('ELEMENT', element)
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