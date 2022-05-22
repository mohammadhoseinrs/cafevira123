import React from 'react'
import './Shoppingtop.css'
import {HiSearch} from 'react-icons/hi'
import shopping from './../../../Assets/images/shopping.png'
export default function Shoppingtop() {
  return (
    <section className='shoppingtop'>
        <section className='shoppingtop__right'>
            <div className="shoppingtop__right__title">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </div>
            <div className="shoppingtop__right__subtitle">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </div>
            <div className="shoppingtop__right__searchbox">
                <input type="text" className="shoppingtop__right__searchbox__input" placeholder='جستجو محصول مورد نظر' />
                <div className="shoppingtop__right__searchbox__button">
                <HiSearch className='shoppingtop__right__searchbox__button__icon' />
                <p className='shoppingtop__right__searchbox__button__text'>جست و جو</p>
                </div>
            </div>
        </section>
        <section className="shoppingtop__left">
            <img src={shopping} alt="" />
        </section>
    </section>
  )
}
