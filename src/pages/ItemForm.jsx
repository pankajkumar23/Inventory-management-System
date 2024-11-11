import React, { useState } from 'react'
import Input from '../component/Input';

const ItemForm = ({visible,setItemData}) => {
 
  
    if(!visible) return null;
    const [formData,setformData]= useState({
        itemName :'',
        quantity :'',
        unitPrice:'',
        submissionDate:'',
        currency:''
    })


    const handleChange =(e)=>{
        const {name,value} = e.target;
        const updatedData = {...formData,[name]:value}
        console.log(e.target);
        setformData(updatedData)
        setItemData(updatedData)
    };


  return (
    <div>
      <h3>
        Item Details
      </h3>
      
      <Input label='Item Name' value={formData.itemName} onChange={handleChange} name='itemName' maxLength={225} />
      <Input label='Quantity' value={formData.quantity} onChange={handleChange} name='quantity' type='text' />
      <Input label='Unit Price' value={formData.unitPrice} onChange={handleChange} name='unitPrice' type='text' />
      <Input label='Currency' value={formData.currency} onChange={handleChange} name='currency' />

      <Input label='Submission Date' value={formData.submissionDate} onChange={handleChange} name='submissionDate' type='date' />
    </div>
  )
}

export default ItemForm
