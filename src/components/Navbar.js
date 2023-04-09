import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (<>
    <div class="nav">
      <img src="/images/logo.png" id="pic1" alt=""/>
      <ul>
        <div class="dropdown">
        <span><Link to="/">Home</Link></span>
        <div class="dropdown-content">
          <a href="#">Homepage 1</a>
          <a href="#">Homepage 2</a>
          <a href="#">Homepage 3</a>
          <a href="#">Homepage 4</a>
        </div>
        </div>

        <div class="dropdown">
        <span><a href="">Shop</a></span>
        </div>

        <div class="dropdown">
        <span><a href="">Memory</a></span>
        </div>

        <div class="dropdown">
        <span><a href="">About</a></span>
        </div>
        
        <div class="dropdown">
        <span><a href="">Blog</a></span>
        <div class="dropdown-content">
          <a href="#">Blog Grid</a>
          <a href="#">Blog Details</a>
        </div>
        </div>

        <div class="dropdown">
        <span><a href="">Categories</a></span>
        <div class="dropdown-content-i">
         <div>
          <ul>
            <a href="#">Rings</a>
            <a href="#">Earings</a>
            <a href="#">Bracelets</a>
            <a href="#">Pendants</a>
            <a href="#">Necklaces</a>
          </ul>
         </div>
         <div class="verline1">
         <div class="verline2"></div>
         </div>
         
         <div>
          <ul class="ul_hover">
            <a href="#"><h5>Shop Pages</h5></a>
            <a href="#">Shop Left Sidebar</a>
            <a href="#">Shop Left Sidebar V2</a>
            <a href="#">Shop Right Sidebar</a>
            <a href="#">Shop Right Sidebar V2</a>
            <a href="#">Product Details</a>
          </ul>
         </div>
         <div>
          <ul class="ul_hover">
            <a href="#"><h5>Other Shop Pages</h5></a>
            <a href="#">My Account</a>
            <a href="#">Checkout</a>
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
          </ul>
         </div>
         <div>
          <img src="/images/categories_ring.png" alt=""/>
         </div>

        </div>
        </div>
        
        <div class="dropdown">
        <span><a href="">Pages</a></span>
        <div class="dropdown-content">
          <a href="#">Gallery</a>
          <a href="#">404</a>
        </div>
        </div>

        <div class="dropdown">
        <span><Link to="/contact">Contact Us</Link></span>
        </div>

        <div class="dropdown">
        <span><a href="">Shop Archive</a></span>
        </div>

        <div class="dropdown">
        <span><a href="">Shop Details</a></span>
        </div>
        </ul>    
    </div>
    </>
  )
}
