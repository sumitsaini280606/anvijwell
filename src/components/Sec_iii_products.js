import React from 'react'
import '../css/Sec_iii_products.css'
const Sec_iii_products = (props) => {
  return (
    <div class="my_prods">
        
        <div class="prod-div">
            <div className='psale'>
            {props.prodtype} 
            </div>
            <div className='pdis'>
            {props.prodis}
            </div>
        </div>
        <div className='pcart'>
            <button>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Sec_iii_products
