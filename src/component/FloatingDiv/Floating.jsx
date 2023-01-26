import React from 'react'
import './Floating.css'

const Floating = ({crown,text1,text2}) => {
  return (
    <div className='floatingdiv'>
      <img src={crown} alt="" />
      <span>
        {text1} 
        <br />
        {text2}
      </span>
    </div>
  )
}

export default Floating
