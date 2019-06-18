import React from 'react';


const ApartmentDropDown = (props) => {
  return (
    <option key={'select' + props.aptNum} value={props.aptNum}>{props.aptNum}</option>
  )
}

export default ApartmentDropDown; 