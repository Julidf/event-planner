import React from 'react'
import "./footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-inner'>
            <div className='footer-logo'>
                <img src='./logo2.png' alt="Logo"/>
                <p>Event Planner</p>
            </div>
            <div className='footer-text'>
                <span> Tu solución de eventos!</span>
            </div>
            <div className='footer-items'>
              <IconButton>
                <FacebookIcon sx={{color:"white"}}/>
                <TwitterIcon sx={{color:"white", marginLeft:"10px"}}/>
                <YouTubeIcon sx={{color:"white", marginLeft:"10px"}}/>
                <InstagramIcon sx={{color:"white", marginLeft:"10px"}}/>
              </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Footer