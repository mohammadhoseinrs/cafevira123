import React from 'react'
import './Shoppingfeaturedtheme.css'
import stf from './../../../Assets/images/stf.jpg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
export default function Shoppingfeaturedtheme() {
  return (
    <section className='sft'>
        <section className='sft__right'>
            <div className="sft__right__box">
                <div className="sft__right__box__top">
                    <img src={stf} alt="" />
                </div>
                <div className="sft__right__box__bottom">
                    <div className="sft__right__box__bottom__inner">
                    <div className="sft__right__box__bottom__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </div>
                    <div className="sft__right__box__bottom__title__subtitle">
                        توسط مهدی
                    </div>
                    <div className="sft__right__box__bottom__bottom">
                        <div className="sft__right__box__bottom__bottom__right">
                            <div className="sft__right__box__bottom__bottom__right__price">45 تومان</div>
                            <div className="sft__right__box__bottom__bottom__right__price__item">۴ فروش</div>
                        </div>
                        <div className="sft__right__box__bottom__bottom__left">
                            <button className='sft__right__box__bottom__bottom__left__btn1'>مشاهده زنده</button>
                            <button className='sft__right__box__bottom__bottom__left__btn2'>
                            <HiOutlineShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="sft__right__box">
                
            </div>
            <div className="sft__right__box">
                
            </div>
            <div className="sft__right__box">
                
            </div>
        </section>
        <section className='sft__left'>
            <div className="sft__left__content">
                <h2>تم های مورد علاقه</h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <button className="ShoppingCategory__container__btn">
                مشاهده همه آیتم ها
            </button>
            </div>
        </section>
    </section>
  )
}
