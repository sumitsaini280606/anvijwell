import React from 'react'
import Sec_iii_products from './Sec_iii_products'
import '../css/Section_iii.css'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

export default function Section_iii() {
    let box=document.querySelector('.product-container');
    const btnpressprev=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-293;
    }
    const btnpressnext=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+293;
    
    }
  return (
    <>
    <div id="sec_iii">
        <div class="text_div">
            <h6><b>LATEST AND GREATEST</b></h6>
            <h1>Latest Products</h1>
            <p>Introducing the newest addition to Anvi Jewellers’ 925 Silver Jewellery collection – the latest must-have accessory for fashion-savvy youth. This latest product is sure to turn heads. Shop now and be the first to own this exclusive piece of jewellery!</p>
        </div>

        <div class="sec-iii-btns">
                <button class="pre-btn1" onClick={btnpressprev}><AiOutlineArrowLeft/></button>
                <button class="next-btn1" onClick={btnpressnext}><AiOutlineArrowRight/></button>
        </div>
        
        <div class="product-carousel">

            <div class="product-container">
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="25%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
                <Sec_iii_products prodtype="Sale" prodis="18%"/>
            </div>
        
        </div>
      
    </div>
    </>
  )
}
