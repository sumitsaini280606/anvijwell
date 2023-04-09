import React from 'react'
import {FaFacebook,FaTwitter,FaPinterest,FaLinkedin} from 'react-icons/fa'
import '../css/Header.css'

export default function Header() {
  return (
    <>
    <div id="hbar">
    <div>
    <ul>
        <li><a href=""><FaFacebook/></a></li>
        <li><a href=""><FaTwitter/></a></li>
        <li><a href=""><FaPinterest/></a></li>
        <li><a href=""><FaLinkedin/></a></li>
    </ul>
    </div>
    <div>
        <ul>
        <span><a href="">Cart </a></span>
        <span><a href="">Wishlist</a></span>
        <span><a href="">My Account</a></span>
        </ul>
    </div>
    </div>
    
    </>
  )
}
