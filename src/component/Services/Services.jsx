import React from 'react'
import Humble from '../../images/humble.png';
import Glasses from "../../images/glasses.png";
import HeartEmoji from "../../images/heartemoji.png";
import './Services.css'
import Card from '../cards/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion"



const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 1, type: 'spring'}
  return (
    <div className="services" id="about" class="about section">
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptas, tenetur minima totam aspernatur magnam <br/>inventore voluptatibus eos perferendis at, quae ab ducimus doloremque minus itaque cum, enim quia rem?</span>
            <a href={Resume} target="_blank" id="resume-link-2">
                <button className='button s-button'
                id="resume-button-2"
                >Download CV</button>
            </a>
            <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
            whileInView={{left:'14rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{left:'14rem'}}>
                <Card emoji={HeartEmoji} heading={"Languages"}
                detail ={"HTML,CSS,Javascript,React js, Node Js"}/>
            </motion.div>
            <motion.div 
            whileInView={{left:'-4rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{top:'12rem',left:"10rem"}}>
                <Card emoji={Glasses} heading={"DSA & Algorithm"}
                detail ={"JAVA 400+Questions"}/>
            </motion.div>
            <motion.div 
            whileInView={{left:'18rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{top:"19rem",left:"12rem"}}>
                <Card emoji={Humble} heading={"Database"}
                detail ={"Mongo DB"}/>
            </motion.div>
        </div>
    </div>
  )
}

export default Services
