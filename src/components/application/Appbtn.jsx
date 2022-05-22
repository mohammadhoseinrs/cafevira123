import React from 'react'
import './Appbtn.css'
export default function Appbtn({text , color , color2}) {
  return (
    <button className='appbtn' style={{backgroundColor:color , color:color2}}>
        {text}
    </button>
  )
}
