import React from 'react'
import './Webbtn.css'
import {IoIosArrowBack} from 'react-icons/io'
export default function Webbtn({color , topText , bottomText}) {
  return (
    <div className='webbtn' style={{backgroundColor:color}}>
        <p className='webbtn__top'>{topText}</p>
        <div className='webbtn__inner'>
            <p className='webbtn__inner__text'>
                {bottomText}
            </p>
            <IoIosArrowBack color={color} size={15} />
        </div>
    </div>
  )
}
