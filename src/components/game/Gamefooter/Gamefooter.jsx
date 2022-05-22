import React from 'react'
import './Gamefooter.css'
import footerlight from './../../../Assets/images/footerlight.png'
export default function Gamefooter() {
  return (
    <section className='gamefooter'>
        <section className='gamefooter__inner'>
            <div className="footer__light">
                <img src={footerlight} alt="" />
            </div>
            <section className='footer__container'>
                <div className="footer__container__right">
                    <div className="footer__container__right__top">
                        <h3 className='footer__container__right__top__title'>
                        لورم ایپسوم متن ساختگی با تولید سادگی از  چاپ
                        </h3>
                        <p className='footer__container__right__top__text'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div className="footer__container__right__bottom">
                        <form className='footer__container__right__bottom__form'>
                            <div className="footer__container__right__bottom__form__top">
                                <input type="text" className='footer__container__right__bottom__form__top__input' placeholder='نام و نام خانوادگی' />
                                <input type="text" className='footer__container__right__bottom__form__top__input' placeholder='ایمیل'/>
                            </div>
                            <input type="text" className='footer__container__right__bottom__form__top__input footer__container__right__bottom__form__top__input2' placeholder='شرکت' />
                            <input type="text" className='footer__container__right__bottom__form__top__input footer__container__right__bottom__form__top__input2' placeholder='پیام' />
                            <div className="footer__container__right__bottom__form__btn">
                                <button className='footer__container__right__bottom__form__btn__btn'>
                                    ارسال
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="footer__container__right__form">
                        
                    </div>
                </div>
                <div className="footer__container__left">
                    
                </div>
            </section>
        </section>
    </section>
  )
}
