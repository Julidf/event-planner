import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-inner'>
        <div className='footer-logo'>
          <img src='./logo2.png' alt="Logo" />
          <p>Event Planner</p>
        </div>
        <div className='footer-otros'>
          <div className='footer-text'>
            <span>Tu solución de eventos!</span>
          </div>
          <div className='footer-items'>
            <IconButton>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
