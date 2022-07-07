import React from 'react'
import './HomeFooter.css'

import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomeFooter = () => {
  return (
    <div className='home-footer'>
            <div className='home-footer-joinus'>
                <div className='home-footer-joinus-heading'>
                    Join-Us
                </div>
                <div className='home-footer-joinus-icon'>
                    <MailIcon sx={{pr:2,pb:2}} />
                    <FacebookIcon sx={{pr:2,pb:2}} />
                    <TwitterIcon sx={{pr:2,pb:2}} />
                    <InstagramIcon sx={{pr:2,pb:2}} />
                </div>
            </div>
            <div className='home-footer-joinus-copyright'>
                <p>COPYRIGHT © 2022 UNIVERSITY</p>
            </div>
    </div>
  )
}

export default HomeFooter