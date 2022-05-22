import React from 'react'
import './ShoppingAll.css'
import shopall from './../../../Assets/images/shopall.jpg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
export default function ShoppingAll() {
  return (
    <section className='shoppingall'>
        <div className="shoppingall__top">
            <h1 className="shoppingall__top__title">
            لورم ایپسوم متن ساختگی با تولید
            </h1>
            <p className='shoppingall__top__subtitle'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
        </div>
        <div className="shoppingall__middle">
            <div className="shoppingall__middle__box">
                <p>همه موارد</p>
            </div>
        </div>
        <section className='shoppingall__bottom'>
            <div className="shoppingall__bottom__item">
                <div className="shoppingall__bottom__item__image">
                    <img src={shopall} alt="" />
                </div>
                <div className="shoppingall__bottom__item__content">
                    <div className="shoppingall__bottom__item__content__title">
                    لورم ایپسوم متن ساختگی با تولید
                    </div>
                    <div className="shoppingall__bottom__item__content__subtitle">
                        توسط مهدی
                    </div>
                    <div className="shoppingall__bottom__item__content__bottom">
                        <div className="shoppingall__bottom__item__content__bottom__price">
                            ۴۵
                        </div>
                    <div className="shoppingall__bottom__item__left">
                            <button className='sft__right__box__bottom__bottom__left__btn1'>مشاهده زنده</button>
                            <button className='sft__right__box__bottom__bottom__left__btn2'>
                            <HiOutlineShoppingCart size={20} />
                            </button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}
