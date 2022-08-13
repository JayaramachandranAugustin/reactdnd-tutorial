import React, { useState } from 'react'
import { DragTypes } from '../constants/DragType'

const AddItem = ({handleItems}) => {
  const [data, setData] = useState({title:"",type:""})

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setData({...data, [name]:value});
  }

  const addSubmit = (event) =>{
    event.preventDefault();
    if(!data.type || !data.title){
        return;
    }
    handleItems(data);
    setData({title:"",type:""});
  }

  return (
    <form className="form" onSubmit={addSubmit}>
        <input className="form-title" type="text" name="title" id="title-input" value={data.title}  onChange={handleChange}/>
        <select className="form-select" name="type" id="type-select" value={data.type}  onChange={handleChange}>
            <option value={""}>Select type</option>
            <option value={DragTypes.DRINK}>Drink</option>
            <option value={DragTypes.FRUIT}>Fruit</option>
            <option value={DragTypes.VEGETABLE}>Vegetable</option>
        </select>
        <button className="form-submit" type="submit">Add Item</button>
    </form>
  )
}

export default AddItem