import React from 'react'
import './Intro.css'
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Profilepic from '../../images/Profilepic.jfif';
import thumbup from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import glassesimoji from '../../images/glassesimoji.png';
import Floating from '../FloatingDiv/Floating';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="home">
        <div className='i-left'>
            <div className='i-name' 
            id="user-detail-name"
            >
                <span style={{color: darkMode ? 'white' : ''}}>Hi! I am</span>
                <span>Vishwajeet Singh</span>
                <span id="user-detail-intro"
                >Full Stack Web Developer with expertise in MERN stack</span>
            </div>
            <button className='button i-button'>Contact</button>
            <div className="i-icons">
                <img src={Github} alt="" id="contact-github"/>
                <img src={Linkedin} alt="" id="contact-linkedin"/>
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className='i-right'>
            {/* <img src={glassesimoji} alt="" /> */}
            <img class="home-img" src={Profilepic} alt="Profile-pic" />
            {/* <div style={{top: '-4%',left: '68%'}}>
                <Floating crown={Crown} text1="Full Stack" text2="Web Develpoer"/>
            </div>
            <div style={{top: '-4%',left: '68%'}}>
                <Floating crown={thumbup} text1="MERN" text2="Stack"/>
            </div> */}
        </div>
    </div>
  )
}

export default Intro
