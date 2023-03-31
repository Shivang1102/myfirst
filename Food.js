import React from "react";


const Food =(props)=>{
    return <div>
    <h3>Food</h3>
    {props.food.map((items)=>{
        return <h2 key={items.id}>
         {items.price}--{items.product}--{items.category}
         </h2>
    })}
    </div>
}

export default Food;