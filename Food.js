import React from "react";


const Food =(props)=>{
    const handleDle=(id)=>{
        props.handleDle(id);
     }
    return <div>
    <h3>Food</h3>
    {props.food.map((items)=>{
        return (
            <div>
            <h2 key={items.id}>
                {items.price}--{items.product}--{items.category}
            </h2>
            <button onClick={() => handleDle(items.id)}>Delete</button>
            </div>
            )
    })}
    </div>
}

export default Food;