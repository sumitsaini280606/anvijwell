import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook,FaTwitter,FaPinterest,FaLinkedin} from 'react-icons/fa'


export default function Navbar() {
  return (<>

    <div className='hbar1'>
    <ul >
        <li><a href="#"><FaFacebook/></a></li>
        <li><a href="#"><FaTwitter/></a></li>
        <li><a href="#"><FaPinterest/></a></li>
        <li><a href="#"><FaLinkedin/></a></li>
    </ul>
    </div>
    <div className='hbar2'>
        <ul>
        <span><a href="#">Cart </a></span>
        <span><a href="#">Wishlist</a></span>
        <span><a href="#">My Account</a></span>
        </ul>
    </div>
    <div id="hbar">
    
    
    <div className="nav">
      <img src="/images/logo.png" id="pic1" alt=""/>
      <ul>
        <span><Link to="/">Home</Link></span>
        <span><Link to="">Shop</Link></span>
        <span><Link to="/">Memory</Link></span>
        <span><Link to="/aboutus">About</Link></span>
        <span><Link to="">Blog</Link></span>
        <span><Link to="">Categories</Link></span>
        <span><Link to="">Pages</Link></span>
        <span><Link to="/contactus">Contact Us</Link></span>
        <span><Link to="">Shop Archive</Link></span>
        <span><Link to="">Shop Details</Link></span>
        </ul>    
    </div>
    </div>
    </>
  )
}
