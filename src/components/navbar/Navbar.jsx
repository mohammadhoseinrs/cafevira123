import React, { useState } from 'react'
import './Navbar.css'
import {MdKeyboardArrowLeft , MdKeyboardArrowDown} from 'react-icons/md'
import {BsFillTelephoneFill , BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'
import {AnimatePresence} from 'framer-motion'
import Modal from './Modal';
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [openMenu,setOpenMenu]=useState(false)
  const [openmodal,setopenmodal]=useState(false)
  const [openDigitalMarketing,setDigitalMarketing]=useState(true)
  const showSubMenu=()=>{

  }
  return (
    <>
    {openmodal && <Modal closemodal={setopenmodal} />}
    <nav className='navbar'>
        <div className="hamburger__menu">
          <GiHamburgerMenu onClick={()=>setOpenMenu(true)} />
        </div>
    <Link to='/' className='navbar__logo'> 
    کافه ویرا
    </Link>
    <nav className="navbar__menu">
      <ul className='navbar__menu__item'>
        <Link to='/web-design'>خانه</Link>
        <Link to='/shopping'>فروشگاه</Link>
        <div>
        <div class="dropdown">
          <li class="dropbtn">
            <p>خدمات</p>
            <MdKeyboardArrowDown/>
            </li>
            <div class="dropdown-content">
                <Link to='/'>طراحی سایت</Link>
                <Link to='/digitalmarketing'>اپلیکیشن</Link>
                <Link to='/seo'>گیم سازی</Link>
                <Link to='/game'>گرافیک و موشن گرافی</Link>
                <Link className='digital-marketing' to='/'>
                  <p  className='digital-marketing-route'>دیجیتال مارکتینگ</p>
                  <MdKeyboardArrowLeft className='digital-marketing-icon' />
                  <div className="digital-marketing-content">
                  <Link to='/'> سئو</Link>
                  <Link to='/'>گوگل ادز </Link>
                  <Link to='/'> اینستاگرام</Link>
                  <Link to='/'> تبلیغات کلی</Link>
                  <Link to='/'>برند سازی</Link>
                  </div>
                  </Link>
                <Link to='/application'>بخش معماری و دکوراسیون داخلی</Link>
            </div>
            </div>
        </div>
        <Link to='/category'>درباره ما</Link>
        <Link to='/product'>تماس با ما</Link>
      </ul>
      <div className="navbar__input">
      <input type="text" />
      <BsSearch />
      </div>
    </nav>
    <section className="navbar__info">
      <div className="navbar__info__login" 
      onClick={()=>setopenmodal(true)}
      >
        <p>ورود به سیستم</p >
        <MdKeyboardArrowLeft className='navbar__info__login__svg' />
      </div>
      <div className="navbar__info__phone">
        <div className="navbar__info__phone__right">
          <div className="navbar__info__phone__right__number">
          <div>۴۵۴۷۸۰۲</div>
            <p>۰۲۱</p>
          </div>
          <p className="navbar__info__phone__right__text">پاسخگوی شما هستیم</p>
        </div>
        <div className="navbar__info__phone__icon">
          <BsFillTelephoneFill color='white' />
        </div>
      </div>
    </section>
    </nav>
    {openMenu &&
    <AnimatePresence>
      <HamburgerMenu setOpenMenu={setOpenMenu} />
    </AnimatePresence>
    }
    </>
  )
}
