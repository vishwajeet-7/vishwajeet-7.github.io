import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experince</span>
        </div>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experince</span>
        </div>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experince</span>
        </div>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experince</span>
        </div>
    </div>
  )
}

export default Experience
