import React from 'react'
import './DigitalMarketingsection.css'
import conver from './../../../Assets/images/conversions.png'
import seo from './../../../Assets/images/seo-art-new.png'

export default function DigitalMarketingsection() {
  return (
    <section className='dgsection'>
        <section className="dgsection__container">
            <section className="dgsection__right">
                <h1 className="dgsection__right__title">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h1>
                <p className="dgsection__right__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <button className='dgsection__right__btn'>بیشتر بدانید</button>
            </section>
            <section className="dgsection__left">
                <img src={conver} alt="" />
            </section>
        </section>
        <section className='dgsection__bottom'>
        <section className="dgsection1__right">
                <h1 className="dgsection__right__title">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h1>
                <p className="dgsection__left__text">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
                <button className='dgsection__right__btn dgsection1__right__btn'>بیشتر بدانید</button>
            </section>
            <section className="dgsection__left">
                <img src={seo} alt="" />
            </section>
        </section>
    </section>
  )
}
