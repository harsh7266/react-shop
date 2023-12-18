import React from 'react'
import data from '../../components/data/data'
import Product from '../../components/Product'
import './shop.css'

function Shop() {
  
  return (
    <div className='product'>
    
      {
        data.map((item) => ( <Product dataa={item} />))
      }

    </div>
  )
}

export default Shop


  
