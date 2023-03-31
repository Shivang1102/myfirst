import React from "react";
import Electronic from "./Electronic";
import Food from "./Food";
import Skin from "./Skin";

 const Category=(props)=>{
 return <div>
    <h1>Product List </h1>
     <Electronic electronic={props.electronic}/>
     <Food  food={props.food}/>
     <Skin skin={props.skin}/>
 </div>
 }

  export default Category;