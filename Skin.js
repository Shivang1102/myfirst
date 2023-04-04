import React from "react";


const Skin =(props)=>{
   const handleDle=(id)=>{
      props.handleDle(id);
   }

    return <div>
    <h3>Skin</h3>

    {props.skin.map((items)=>{
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

export default Skin;