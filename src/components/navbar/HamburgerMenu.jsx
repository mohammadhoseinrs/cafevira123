import React from 'react'
import { useState } from 'react';
import {GrFormClose} from 'react-icons/gr'
import { motion ,AnimatePresence  } from "framer-motion"
import { Link } from 'react-router-dom'
import {MdKeyboardArrowDown ,MdKeyboardArrowUp} from 'react-icons/md'

export default function HamburgerMenu({setOpenMenu}) {
  const [openServices,setOpenServices]=useState(false)
  const [opendigitalHamburger,setDigitalHamburger]=useState(false)
  return (
      <AnimatePresence>
    <div
    className='hamburgermenu' onClick={()=>setOpenMenu(false)}>
        <motion.div
        initial={{opacity:0,x:1000}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.9,ease:'easeIn'}}
        exit={{x:1000}}
        className="hamburgermenu__item" onClick={(event)=>event.stopPropagation()}>
            <div className="close__btn" >
                <GrFormClose onClick={()=>setOpenMenu(false)} /> 
            </div>

        <ul className='hamburgermenu__item__items'>
        <Link to='/' onClick={()=>setOpenMenu(false)}>خانه</Link>
        <Link to='/shopping' onClick={()=>setOpenMenu(false)}>فروشگاه</Link>
        
        <p className='hamburger-menu-service' onClick={()=>setOpenServices(!openServices)}>
          خدمات
          {openServices ?<MdKeyboardArrowUp size={25} />  : <MdKeyboardArrowDown size={25} /> }
          
          </p>
          {
            openServices && (
              <div className="hamburger-digital-marketing">
                  <Link to='/web-design'>طراحی سایت</Link>
                <Link to='/'>اپلیکیشن</Link>
                <Link to='/'>گیم سازی</Link>
                <Link to='/'>گرافیک و موشن گرافی</Link>
                <p className='hamburger-menu-service' onClick={()=>setDigitalHamburger(!opendigitalHamburger)}>
          خدمات
          {opendigitalHamburger ?<MdKeyboardArrowUp size={25} />  : <MdKeyboardArrowDown size={25} /> }
          
          </p>
          {
            opendigitalHamburger && (
              <div className='opendigitalhamburger'>
              <Link to='/'> سئو</Link>
                  <Link to='/'>گوگل ادز </Link>
                  <Link to='/'> اینستاگرام</Link>
                  <Link to='/'> تبلیغات کلی</Link>
                  <Link to='/'>برند سازی</Link>
              </div>
            )
          }
              </div>
            )
          }
        <Link to='/category' onClick={()=>setOpenMenu(false)}>درباره ما</Link>
        <Link to='/product' onClick={()=>setOpenMenu(false)}>تماس با ما</Link>
      </ul>
        </motion.div>
    </div>
    </AnimatePresence>
  )
}
