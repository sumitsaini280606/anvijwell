import React from 'react'
import '../css/Section_i.css'

export default function Section_i() {
  return (
    <>
    <div id="sec_1">
        <div>
        <h6><b>ANVI JEWELLERS</b></h6>
      <h1>A Craftsman's Heritage</h1>
      <button id="b1">EXPLORE DESIGNS</button>
        </div>
        <div class="sec_1Bar">
            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/bracelet_icon.png" alt=""/>             
            </div>
            <h5>Bracelet</h5>
            <p>9 Products</p>
              </div>
            <div class="sec1_imagehover">
              <img src="/images/bangle_icon_background.png" alt=""/>
            </div>
            </div>


            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/bangle_2.png" alt=""/>             
            </div>
            <h5>Bangle</h5>
            <p>5 Products</p>
              </div>
            <div class="sec1_imagehover">
              <img src="/images/bangle_2.png" alt=""/>
            </div>
            </div>
        </div>
        
      </div>
    </>
  )
}
