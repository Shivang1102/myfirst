import React from "react";


const Electronic =(props)=>{
    return <div>
    <h3>Electronic</h3>
    {props.electronic.map((items)=>{
        return <h2 key={items.id}>
            {items.price}--{items.product}--{items.category}
        </h2>
    })}
    </div>
}

export default Electronic;