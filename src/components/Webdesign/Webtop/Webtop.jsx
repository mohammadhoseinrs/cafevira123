import React from 'react'
import './Webtop.css'
import web1 from './../../../Assets/images/web1.svg'
export default function Webtop() {
  return (
    <section className='Webtop'>
        <section className='Webtop__top'>
            <h1 className='Webtop__top__title'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h1>
            <p className='Webtop__top__subtitle'>
            لورم ایپسوم متن ساختگی با تولید
            </p>
            <div className="Webtop__top__plus">
                <p>
                    طراحی وب
                </p>
                 + 
                <p>
                    طراحی سایت
                </p>
                + 
                <p>
                    دیجیتال مارکتینگ
                </p>
            </div>
            <div className="Webtop__top__btn">
                <div className="Webtop__top__btn__item">
                    <button className='Webtop__top__btn__item__btn'>
                        طراحی وب
                    </button>
                    <p>ووردپرس ، لاراول ، ریکت</p>
                </div>
                <div className="Webtop__top__btn__item">
                    <button className='Webtop__top__btn__item__btn'>
                        طراحی سایت
                    </button>
                    <p>ووردپرس ، لاراول ، ریکت</p>
                </div>
                <div className="Webtop__top__btn__item">
                    <button className='Webtop__top__btn__item__btn'>
                    دیجیتال وب
                    </button>
                    <p>ووردپرس ، لاراول ، ریکت</p>
                </div>
            </div>
            <section className='Webtop__bottom'>
                <img src={web1} alt="" />
            </section>
        </section>
    </section>
  )
}
