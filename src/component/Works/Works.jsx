import React from 'react'
import './Works.css'
import Fiverr from "../../images/fiverr.png"
import Upwork from "../../images/Upwork.png"
import Amazon from "../../images/amazon.png"
import Shopify from "../../images/Shopify.png"
import Facebook from "../../images/Facebook.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion"
import Resume from "../Services/resume.pdf"

const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id='resume'>
        <div className="awesome">
            <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
            <span>Projects</span>
            <span>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. Impedit voluptas, tenetur minima 
            <br/>totam aspernatur magnam <br/>inventore voluptatibus eos perferendis at, quae ab 
            <br/>ducimus doloremque minus itaque cum, enim quia rem?
            <br/>ducimus doloremque minus itaque cum, enim quia rem?
            </span>
            <a href={Resume} target="_blank" id="resume-link-1">
            <button className='button s-button' id="resume-button-1">Download CV</button>
            </a>
            <div className='blur s-blurl' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* {right side} */}
        <div className="w-right">
            <motion.div
             initial={{rotate:45}}
             whileInView={{rotate:-2}}
             viewport={{margin: '-40px'}}
             transition={{duration: 1,type: 'smooth'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
                {/* backgroud circle */}
                {/* <div className='w-backcircle blueCircle'></div>
                <div className='w-backcircle yellowCircle'></div> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Works
