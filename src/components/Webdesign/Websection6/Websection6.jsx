import React from 'react'
import './Websection6.css'
import journalsvg from './../../../Assets/images/journalweb.svg'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
export default function Websection6() {
  return (
    <section className='websection6'>
        <section className='websection6__right'>
            <img src={journalsvg} alt="" />
        </section>
        <section className='websection6__left'>
            <h2 className='websection6__left__top'>
              بلاگ
            </h2>
            <div className="websection6__left__bottom">
              <div className="websection6__left__bottom__item">
                <p className='websection6__left__bottom__item__title'>
                  طراحی
                </p>
                <p className='websection6__left__bottom__item__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div className="websection6__left__bottom__item">
                <p className='websection6__left__bottom__item__title'>
                  طراحی
                </p>
                <p className='websection6__left__bottom__item__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div className="websection6__left__bottom__item">
                <p className='websection6__left__bottom__item__title'>
                  طراحی
                </p>
                <p className='websection6__left__bottom__item__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
            <div className="websection6__left__bottom__icon">
                <p>لورم اپیسوم</p>
                <IoIosArrowDropleftCircle color='#701FFF' />
            </div>
        </section>
    </section>
  )
}
