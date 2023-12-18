import React, { useContext } from 'react'
import data from '../../components/data/data'
import {ShopContext} from '../../components/data/shop-Context'
import Cartitem from '../../components/Cartitem'
import './cart.css'


function Cart() {
  const{cartitems,getTotalcartamount}=useContext(ShopContext)
  

  return (
    <div className='cart'>

    <div className='cartitems'><h1>Your cart items</h1></div>
      
      <div className='productitems'>
         {
            data.map((product) => {
              if(cartitems[product.id] >0){
              return <Cartitem dataa={product} />
              }
              else return null
            })
         }
      </div>

      <div className='total'>
          <p>Subtotal-----${getTotalcartamount()}</p>
      </div>

    </div>
  )
}

export default Cart




