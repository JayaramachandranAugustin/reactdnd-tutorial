import React, { useEffect, useState } from 'react'
import Item from './Item';
import { useDrop } from 'react-dnd';
import { DragTypes } from '../constants/DragType';
import '../styles/dragDrop.css';
import AddItem from './AddItem';
const list =[
    {id:1,title:"Water"},
    {id:2,title:"Milk"},
    {id:3,title:"Energy drink"}
];

const DragDrop = () => {
    const [items, setItems] = useState([]);
    const [dropData, setDropData] = useState([])
    const [{isOverFruit},dropFruit] = useDrop(()=>({
        accept : DragTypes.FRUIT,
        drop:(item) => addItemToBoard(item),
        collect:(monitor) =>({
            isOverFruit: !!monitor.isOver(),
        })
    }))
    
    useEffect(() => {
        console.log(items);
    }, [items])
    

    const handleItems = (data)=>{
        items.push(data);
        setItems([...items]);
        console.log(items);
        console.log(data);
    }
    

    const [{isOverVegetable},dropVegetable] = useDrop(()=>({
        accept : DragTypes.VEGETABLE,
        drop:(item) => addItemToBoard(item),
        collect:(monitor) =>({
            isOverVegetable: !!monitor.isOver(),
        })
    }))


    const [{isOverDrink},dropDrink] = useDrop(()=>({
        accept : DragTypes.DRINK,
        drop:(item) => addItemToBoard(item),
        collect:(monitor) =>({
            isOverDrink: !!monitor.isOver(),
        })
    }))


    const addItemToBoard = (item) =>{
        console.log(item);
        dropData.push(item);
        setDropData([...dropData]);
    }
  return (
    <div className="container">
        <div className='drag-section'>
            {items.map((item,index)=>(
                    <Item key={index} item={item}/>
                ))}
            <AddItem handleItems={handleItems}/>
        </div>
        <div className={`drop-section ${isOverFruit&&'isover-fruit'}`} ref ={dropFruit} >
            <h3 className="section-title"> Fruit </h3>
            {dropData.filter(function(item){ return item.type === DragTypes.FRUIT }).map((data,index)=>{
                return (
                    <div key={index} className="drop-item">
                        <h3>{data.title}</h3>
                    </div>
                )
            })}
        </div>
        <div className={`drop-section ${isOverVegetable&&'isover-vegetable'}`} ref ={dropVegetable} >
        <h3 className="section-title"> Vegetable </h3>
            {dropData.filter(function(item){ return item.type === DragTypes.VEGETABLE }).map((data,index)=>{
                return (
                    <div key={index} className="drop-item">
                        <h3>{data.title}</h3>
                    </div>
                )
            })}
        </div>
        <div className={`drop-section ${isOverDrink&&'isover-drink'}`} ref ={dropDrink} >
        <h3 className="section-title"> Drink </h3>
            {dropData.filter(function(item){ return item.type === DragTypes.DRINK }).map((data,index)=>{
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