import React from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {RiShoppingCartFill} from 'react-icons/ri'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import './ProductTop.css'
export default function ProductTop() {
  return (
    <div className="product__top">
    <div className="product__top__inner">
        <div className="product__top__inner__top">
            <Link to='/'>خانه</Link>
            <MdKeyboardArrowLeft className='product__top__inner__top__icon' />
            <Link to='/shopping'>فروشگاه</Link>
            <MdKeyboardArrowLeft className='product__top__inner__top__icon' />
            <Link className='product__top__inner__top__active' to='/product'>محصول</Link>
        </div>
        <div className="product__top__inner__top__title">
        لورم - ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </div>
        <div className="product__top__inner__top__subtitle">
            <div className="product__top__inner__top__subtitle__creator">
                توسط مهدی
            </div>
            <div className="product__top__inner__top__subtitle__sales">
                <p>۳۸ فروش</p>
                <RiShoppingCartFill />
            </div>
            <div className="product__top__inner__top__subtitle__update">
                <p>آپدیت</p>
                <BsFillCheckCircleFill />
            </div>
            <div className="product__top__inner__top__subtitle__update">
                <p>مستندات</p>
                <BsFillCheckCircleFill />
            </div>

        </div>
    </div>
</div>
  )
}
