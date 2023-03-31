import React, { useState } from "react";

const  Form =(props)=>{
    const [eneteredid,setenteredid]= useState('')
    const [eneteredprice,setenteredprice]= useState('')
    const [eneteredproduct,setenteredproduct]= useState('')
    const [eneteredcategory ,setenteredcategory]= useState('Choose')

   const  idChangeHandler =(event)=>{
      setenteredid(event.target.value)
   }
  const priceChangeHandler=(event)=>{
       setenteredprice(event.target.value)
  }

  const productChangeHandler=(event)=>{
    setenteredproduct(event.target.value)
  }

  const categoryChangeHandler=(event)=>{
        setenteredcategory(event.target.value)
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    const newproduct= {
        id:eneteredid,
        price:eneteredprice,
        product:eneteredproduct,
        category:eneteredcategory
    }
   if(eneteredcategory==='Electronic'){
    props.onelectronic(newproduct);
   }
   if(eneteredcategory==='Food'){
    props.onFood(newproduct);
   }
   if(eneteredcategory==='Skin'){
    props.onSkin(newproduct);
   }

    localStorage.setItem(eneteredid, JSON.stringify(newproduct));

    setenteredid('');
    setenteredprice('');
    setenteredproduct('');
    setenteredcategory('');

}
  
    return <form  onSubmit={submitHandler}>
        <div>
        <label htmlFor="id">Product id </label>
       <input  type='number' id='id' value={eneteredid} onChange={idChangeHandler}/>
       <label htmlFor="price">Price</label>
       <input  type='number' id='price'  value={eneteredprice}  onChange={priceChangeHandler} />
       <label htmlFor="product">ProductName </label>
       <input  type='text' id='product' value={eneteredproduct} onChange={productChangeHandler}/>
       <label htmlFor="category"> Category</label>
       <select id='category' value={eneteredcategory} onChange={categoryChangeHandler} >
        <option>Choose</option>
        <option value='Electronic'>Electronic</option>
        <option value='Food'>Food</option>
        <option value='Skin'>Skin</option>
    
       </select>
       <button type="submit">Submit</button>
       </div>
       
   

    </form>
}
export default Form;