import React from 'react'

const CheckBox = ({label,isChecked,onChange}) => {
  return (
    <div>
      <input type='checkbox' checked={isChecked} onChange={onChange}/>
      <label>{label}</label>
    </div>
  )
}

export default CheckBox
