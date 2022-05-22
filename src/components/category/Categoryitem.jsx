import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import shopall from './../../Assets/images/shopall.jpg'
export default function Categoryitem() {
  return (
    
    <div className="Categorytop__gray__bottom__left__item">
    <div className="Categorytop__gray__bottom__left__item__image">
        <img src={shopall} alt="" />
    </div>
    <div className="Categorytop__gray__bottom__left__item__bottom">
        <p className="Categorytop__gray__bottom__left__item__bottom__title">
        ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p className='Categorytop__gray__bottom__left__item__bottom__subtitle'>
        با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <div className="Categorytop__gray__bottom__left__item__bottom__price">
            39 تومان
        </div>
        <div className="Categorytop__gray__bottom__left__item__bottom__bottom">
        <div className="sft__right__box__bottom__bottom__left">
            <button className='sft__right__box__bottom__bottom__left__btn1'>مشاهده زنده</button>
            <button className='sft__right__box__bottom__bottom__left__btn2'>
            <HiOutlineShoppingCart size={20} />
            </button>
        </div>
        <div className="Categorytop__gray__bottom__left__item__bottom__bottom__sales">
            ۲۷ فروش
        </div>
        </div>
    </div>
 </div>
  )
}
