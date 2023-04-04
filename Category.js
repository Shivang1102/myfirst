import React from "react";
import Electronic from "./Electronic";
import Food from "./Food";
import Skin from "./Skin";

 const Category=(props)=>{
 return <div>
    <h1>Product List </h1>
     <Electronic electronic={props.electronic} handleDle={props.delElec}/>
     <Food  food={props.food} handleDle={props.delFood}/>
     <Skin skin={props.skin} handleDle={props.delSkin}/>
 </div>
 }

  export default Category;