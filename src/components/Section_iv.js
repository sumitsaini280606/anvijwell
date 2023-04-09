import React from 'react'
import Section_iv_products from './Section_iv_products'
import '../css/Section_iv.css'
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

export default function Section_iv() {
    let box=document.querySelector('.product-container2');
    const btnpressprev2=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-(380);
    }
    const btnpressnext2=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+(380);
    
    }
  return (
    <>
    <div id="sec_iv">
        <div class="text_div">
            <h6><b>BLOG</b></h6>
            <h1>News Feed</h1>
        </div>

        <div class="sec-iv-btns">
                <button class="pre-btn2" onClick={btnpressprev2}><AiOutlineArrowLeft/></button>
                <button class="next-btn2" onClick={btnpressnext2}><AiOutlineArrowRight/></button>
        </div>
        
        <div class="product-carousel2">

            <div class="product-container2">
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
                <Section_iv_products prodimg="/images/news_feed.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/>
            </div>
        
        </div>
      
    </div>
    </>
  )
}
