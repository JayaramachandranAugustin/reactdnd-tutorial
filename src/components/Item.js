import React from 'react'
import { DragTypes } from '../constants/DragType'
import {useDrag} from 'react-dnd';


const Item = ({item}) => {
    const [{isDragging},drag,dragPreview] =useDrag(()=>({
        type: DragTypes.ITEM,
        item: item,
        collect:(monitor) =>({
            isDragging: !!monitor.isDragging(),
        })
    }))
  return (
    <>    {isDragging ?
      (<div ref={dragPreview} >
    </div>):
    (<div ref={drag} className="item">
        <h3>{item.title}</h3>
    </div>)}
    </>

  )
}

export default Item