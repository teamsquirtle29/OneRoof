import React from 'react';


const AptDropDown = (props) => {
  return (
    <option key={'select' + props.aptNum} value={props.aptNum}>{props.aptNum}</option>
  )
}

export default AptDropDown; 