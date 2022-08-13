import React, { useState } from 'react'
import Item from './Item';
import { useDrop } from 'react-dnd';
import { DragTypes } from '../constants/DragType';
import '../styles/dragDrop.css';
const list =[
    {id:1,title:"Water"},
    {id:2,title:"Milk"},
    {id:3,title:"Energy drink"}
];

const DragDrop = () => {
    const [dropData, setDropData] = useState([])
    const [{isOver},drop] = useDrop(()=>({
        accept : DragTypes.ITEM,
        drop:(item) => addItemToBoard(item),
        collect:(monitor) =>({
            isOver: !!monitor.isOver(),
        })
    }))

    const addItemToBoard = (item) =>{
        console.log(item);
        setDropData([item]);
    }
  return (
    <div className="container">
        <div className='drag-section'>
            {list.map((item,index)=>{
                return (
                    <Item key={index} item={item}/>
                )
            })}
        </div>
        <div className={`drop-section ${isOver&&'isover-section'}`} ref ={drop} >
            {dropData.map((data,index)=>{
                return (
                    <div key={index} className="drop-item">
                        <h3>{data.title}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DragDrop