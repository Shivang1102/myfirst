import React from "react";


const Electronic =(props)=>{

    const handleDle=(id)=>{
        props.handleDle(id);
     }
    return <div>
    <h3>Electronic</h3>
    {props.electronic.map((items)=>{
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

export default Electronic;