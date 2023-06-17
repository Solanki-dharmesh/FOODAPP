import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatchCart,useCart } from './ContextReducer';
import { useRef } from 'react';


const Card = ({foodItem,options},props ) => {

  let dispatch=useDispatchCart()
  let data=useCart();
 const priceRef=useRef()
      let opt={options};
      let priceOptions=Object.keys(options);
    const [qty, setqty] = useState(1)
    const [size, setsize] = useState("")

    const handleAddToCart = async () => {
      let food = []
      for (const item of data) {
        if (item.id === foodItem._id) {
          food = item;
  
          break;
        }
      }
      console.log(food)
      console.log(new Date())
      if (food !== []) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
          return
        }
        else if (food.size !== size) {
          await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
          console.log("Size different so simply ADD one more to the list")
          return
        }
        return
      }
  
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
  
  
      // setBtnEnable(true)
  
    }
  

   let finalPrice= qty *parseInt(options[size]);

   useEffect(() => {
    setsize(priceRef.current.value)
   }, [])
  return (
    <div className="card mt-3" style={{width:"18rem",maxHeight:"400px"}}>
        <img src={foodItem.img} alt="..." className="caed-img-top"  style={{height:"200px",objectFit:"fill"}}/>
        <div className="card-body"> 
          <h5 className="card-title">{foodItem.name}</h5>
          {/* <p className="card-text">{dec}</p> */}
         <div className="container w-100">
          <select className="m-2 h-100  bg-success text-black"   onChange={(e)=>setqty(e.target.value)}>
            {Array.from(Array(6),(e,i)=>{
              return(
                <option key={i+1} value={i+1} >{i+1}</option>
              )
            })}
          </select>
          <select className="m-2 h-100  bg-success text-black rounded" ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
            { 
            priceOptions.map((d)=>{
              return <option key={d} value={d}>{d}</option>
            })
            }
          </select>

          <div className=" h-100 fs-5 ">
             ₹{finalPrice}/- 
          </div>
         </div>
         <hr />
 <button className={'btn bg-warning text-black mx-1'} onClick={handleAddToCart}>
        Add to Cart
       </button>
        </div>

      </div>
  )
}

export default Card
