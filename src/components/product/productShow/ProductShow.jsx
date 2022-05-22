import React from 'react'
import './ProductShow.css'
import product from './../../../Assets/images/product.jpg'
import {VscPreview} from 'react-icons/vsc'
import {BiCheck} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'
export default function ProductShow() {
  return (
    <section className='productshow'>
      <div className="productshow__container">
        <div className="productshow__right">
          <div className="productshow__right__image">
            <img src={product} alt="" />
          </div>
          <div className="productshow__right__btn">
            <button className='productshow__right__btn__main'>
             <p>مشاهده آنلاین</p>
            <VscPreview size={22}/> 
            </button>
          
          </div>
        </div>
        <div className="productshow__left">
          <div className="productshow__left__inner">
            <div className="productshow__left__inner__top">
              <p className='productshow__left__inner__top__left'>regular license</p>
              <p className='productshow__left__inner__top__left'>45$</p>
            </div>
            <div className="productshow__left__inner__middle">
              <div className="productshow__left__inner__middle__item">
                <BiCheck />
                <p>Quality checked by Envato</p>
              </div>
              <div className="productshow__left__inner__middle__item">
                <BiCheck />
                <p>Quality checked by Envato</p>
              </div>
              <div className="productshow__left__inner__middle__item">
                <BiCheck />
                <p>Quality checked by Envato</p>
              </div>
            </div>
            <div className="productshow__left__inner__bottom">
              <p>اضافه کردن به سبد خرید</p>
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
