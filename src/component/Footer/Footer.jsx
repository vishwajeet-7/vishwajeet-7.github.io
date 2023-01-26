import React from 'react'
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../images/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}}/>
      <div className='f-content'>
        <div className='f-content-inner'>
        <span id="contact-email">vishady7@gmail.com</span><br />
        <span id="contact-phone">Contact Number: 7004850417</span>
        </div>

        <div className="f-icons">
            <Insta color='white' size='3rem'/>
            <Linkedin color='white' size='3rem'/>
            <Github color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
