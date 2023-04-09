import React from 'react'
import '../css/Section_iv_products.css'
const Sec_iv_products = (props) => {
  return (
    <div class="my_prods2">
        <div class="sec-iv-imgs">
            <img class="sec-iv-img" src={props.prodimg} alt=""/>
        </div>

        <div class="prod-div2">
            <div className='pnews'>
            <div class="sec-iv-date">
            {props.prodnews1} 
            </div>
            <div class="sec-iv-info">
            {props.prodnews2}
            </div>
            <div class="sec-iv-details">
            {props.prodnews3}
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sec_iv_products
