
import React, { useState }  from "react";
import Form from "./component/AddProduct/Form";
import Category from "./component/Category/Category";


function App(props) {

 const [electronic,setElectronic]=useState([])
 const [food,setFood]=useState([])
 const [skin,setSkin]=useState([])


const electronicHandler=(data)=>{
    setElectronic((prevdata)=>{
          return[data,...prevdata]
    }
    )
}


const foodsHandler=(data)=>{
  setFood((prevdata)=>{
        return[data,...prevdata]
  }
  )
}

const skinHandler=(data)=>{
  setSkin((prevdata)=>{
        return[data,...prevdata]
  }
  )
}

  return <div>
  
  <Form  onelectronic={electronicHandler} onFood={foodsHandler}  onSkin={skinHandler}/>
  <Category  electronic={electronic} food={food} skin={skin}   />

  </div>
}

export default App;
