import React from 'react'

const Input = ({label,value,onChange,name,type='text',maxLength}) => {
 
  
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} name ={name} maxLength={maxLength}/>
    </div>
  )
}

export default Input
