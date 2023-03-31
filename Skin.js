import React from "react";


const Skin =(props)=>{
    return <div>
    <h3>Skin</h3>
    {props.skin.map((items)=>{
     return <h2 key={items.id}>
     {items.price}--{items.product}--{items.category}
     </h2>
    })}
    </div>
}

export default Skin;