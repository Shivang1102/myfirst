import React, { useState } from "react";
import Form from "./component/AddProduct/Form";
import Category from "./component/Category/Category";

function App(props) {
  const [electronic, setElectronic] = useState([]);
  const [food, setFood] = useState([]);
  const [skin, setSkin] = useState([]);


  const electronicHandler = (data) => {
    setElectronic((prevdata) => {
      return [data, ...prevdata];
    });
  };

  const foodsHandler = (data) => {
    setFood((prevdata) => {
      return [data, ...prevdata];
    });
  };

  const skinHandler = (data) => {
    setSkin((prevdata) => {
      return [data, ...prevdata];
    });
  };
  
  const skinDelHandler = (itemid) => {
    console.log(" Skin Deleted!");
    localStorage.removeItem(itemid)
    setSkin(prevdata=>{
      const updateddata=prevdata.filter(item=>item.id !==itemid );
      return updateddata;
    })
  };

  const foodDelHandler=(itemid)=>{
     console.log('Food Deleted!')
     localStorage.removeItem(itemid)
     setFood(prevdata=>{
      const updateddata=prevdata.filter(item=>item.id !==itemid );
      return updateddata;
    })
  }
   const elecDelHandler=(itemid)=>{
     console.log('Elec Deleted!')
     localStorage.removeItem(itemid)
     setElectronic(prevdata=>{
      const updateddata=prevdata.filter(item=>item.id !==itemid );
      return updateddata;
    })
   }
  return (
    <div>
      <Form
        onelectronic={electronicHandler}
        onFood={foodsHandler}
        onSkin={skinHandler}
      />
      <Category
        electronic={electronic}
        food={food}
        skin={skin}
        delSkin={skinDelHandler}
        delFood={foodDelHandler}
        delElec={elecDelHandler}
      />
    </div>
  );
}

export default App;
