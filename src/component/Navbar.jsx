import React from 'react'
import "./Navbar.css"
import Toggle from './Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrapper' id="nav-menu">
        <div className='n-left'>
            <div className='n-name'>Vishwajeet</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='home' smooth={true}
                    class="nav-link home" activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='about' smooth={true} class="nav-link about" activeClass="activeClass">
                    <li>About</li>
                    </Link>
                    <Link spy={true} to='skills' smooth={true} class="nav-link skills" activeClass="activeClass">
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='projects' smooth={true} class="nav-link projects"  activeClass="activeClass">
                    <li>Projects</li>
                    </Link>
                    <Link spy={true} to='resume' smooth={true} class="nav-link resume" activeClass="activeClass">
                    <li>Resume</li>
                    </Link>   
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true} class="nav-link contact" activeClass="activeClass">
            <button className='button n-button'>
                Contact me
            </button>
            </Link> 
            
        </div>
      
    </div>
  )
}

export default Navbar
