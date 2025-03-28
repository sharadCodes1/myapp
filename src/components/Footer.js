import React from 'react'
import vid from '../videofoot.mp4'
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import '../componentsstyle/Footer.css'
export default function Footer() {
  return (
    <div >
        <div className='footer-container'>
        <video src={vid} muted autoPlay loop typeof='video/mp4'  className='videofoot'></video> 
        <div className='flex'>
            <div>
            <h4 className='textf'>Keep in Touch</h4>
        <h2 className='textf nextf'>Plan with us</h2>
            </div>
            <input placeholder='enter email' type='email' className='email'></input>
        <button className='booknow btn'>Send <IoIosSend /></button>
        </div>
        <div className='socials'>
        <FaInstagram />
        <FaDiscord />
        <FaFacebook />
        <FaTwitter />
        </div>
        

        
        </div>
        
      
    </div>
  )
}
