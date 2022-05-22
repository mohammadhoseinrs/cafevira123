import React from 'react'
import './Categorytop.css'
import {FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import shopall from './../../../Assets/images/shopall.jpg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
export default function Categorytop() {
  return (
    <section className='Categorytop'>
        <section className='Categorytop__container'>
            <p className="Categorytop__right">
            لورم ایپسوم متن ساختگی با تولید سادگی از 
            </p>
            <div className="Categorytop__left">
                <div className="Categorytop__left__input">
                    <input className='Categorytop__left__input__input' type="text" placeholder='جستجو در این کتگوری' />
                    <button className='Categorytop__left__input__btn'>
                        <FiSearch />
                    </button>
                </div>
            </div>
        </section>
        <div className="Categorytop__bottom">
        <p className="Categorytop__text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
         </div>
         <div className="Categorytop__gray__top">
             <div className="Categorytop__gray__top__title">
                <Link to='/'>خانه</Link>
                <p>/</p>
                <Link to='/shopping'>فروشگاه</Link>
             </div>
         </div>
         <div className="Categorytop__gray__bottom">
             <div className="Categorytop__gray__bottom__right">
                <p className="Categorytop__gray__bottom__right__text">
                لورم ایپسوم متن ساختگی با نامفهوم از صنعت چاپ
                </p>
                <div className='Categorytop__gray__bottom__right__conatiner__btn'>
                <button className='Categorytop__gray__bottom__right__btn'>
                    جستجو بهترین ایتم ها
                </button>
                </div>
             </div>
             <div className="Categorytop__gray__bottom__left">

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
             </div>
         </div>
    </section>
  )
}
