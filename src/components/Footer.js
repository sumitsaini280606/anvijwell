import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram,FaPhoneAlt,FaSearch} from 'react-icons/fa'


export default function Footer() {
  return (
    <div className='foot' >
        <div className='footMain'>
            <div className="back2top">
                    <i class="fas fa-chevron-up">
                    </i>
                    <span>Back To Top </span>
            </div>
            <div className='footSec1'>
                <div className='footSec1Lft'>
                    <img src='/images/logo.png' alt=''/>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='footSec1rgt'>
                    <ul>
                        <li><a href=""><FaFacebookF/></a></li>
                        <li><a href=""><FaInstagram/></a></li>
                        <li><a href=""><FaTwitter/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footSec2">
                <div className="footSec2Phone">
                    <div className="footSec2PhoneImg">
                        <a href=""><FaPhoneAlt/></a>
                    </div>
                    <div className='footSec2Phone1'>
                        <h4>Phone Number</h4>
                        <h6>+987 876 765 76 577</h6>
                    </div>
                </div>
                <div className="footSec2Email">
                    <div className="footSec2EmailImg">
                        <a href=""><FaPhoneAlt/></a>
                    </div>
                    <div className='footSec2Email1'>
                        <h4>Email Address</h4>
                        <h6>info@examle.com</h6>
                    </div>
                </div>
                <div className="footSec2Srch">
                    <div className="footSec2SrchImg">
                        <a href=""><FaSearch/></a>
                    </div>
                    <div className='footSec2Srch1'>
                        <input type='search' placeholder='search'></input>
                    </div>
                </div>
                
                <div className="footSec2Phone">
                    <div className='footSec2add1'>
                        <h4>Office Address</h4>
                        <h6>14/A, Miranda City, NYC</h6>
                    </div>
                    <div className="footSec2addImg">
                        <a href=""><FaPhoneAlt/></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
