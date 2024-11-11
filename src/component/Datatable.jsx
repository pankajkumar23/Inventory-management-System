import React, { useState } from 'react'
import { updateItemSupplier } from '../services/apiService';

const Datatable = ({data,setSubmittedData}) => {
    console.log("data table",data);
    
    const [edittableRow,setEditableRow]=useState(null);
    const [editedData,setEditedData]= useState({})

    const handleEdit =(index)=>{
        setEditableRow(index);
        setEditedData(data[index]);

    }
    const handleSave =(index)=>{
       const updatedData = [...data]
       updatedData[index] = editedData
       setSubmittedData(updatedData)
       setEditableRow(null)
    }
    const handleChange =(e,field,category)=>{
        setEditedData({...editedData,[category]:{...editedData[category],[field]:e.target.value},
    })}
  return (
   <table>
    <thead>
        <tr>
            <th>
                Supplier
            </th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((row,index)=>{
                return(
                <tr key={index}>
                    <td>{edittableRow===index ? <input value={editedData.supplierName} onChange={(e)=>handleChange(e,'supplierName')}/>:row.supplier.supplierName}</td>
                    <td>{edittableRow===index ? <input value={editedData.itemName} onChange={(e)=>handleChange(e,'itemName')}/>:row.itemDetails.itemName}</td>
                    <td>{edittableRow===index ? <input value={editedData.quantity} onChange={(e)=>handleChange(e,'quantity')}/>:row.itemDetails.quantity}</td>
                    <td>{edittableRow===index ? <input value={editedData.unitPrice} onChange={(e)=>handleChange(e,'unitPrice')}/>:row.itemDetails.unitPrice}</td>
                <td>{row.supplier.cityName}</td>
                <td>{row.supplier.countryName}</td>
                <td>{row.supplier.email}</td>
                <td>{row.supplier.phoneNumber}</td>
                <td>
                    {edittableRow ===index ?(
                        <button onClick={()=>handleSave(index)}>Save</button>
                    ):
                    (<button onClick={()=>handleEdit(index)}>Edit</button>
                )}
                </td>
                </tr>)
            })}
    </tbody>
   </table>
  )
}

export default Datatable
