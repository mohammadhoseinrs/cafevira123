import React from 'react'
import './Websection1.css'
import web2 from './../../../Assets/images/web2.webp'
import Webbtn from './Webbtn'
export default function Websection1() {
  return (
    <section className='websection1'>
        <section className='websection1__right'>
            <h2 className='websection1__right__title'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h2>
            <p className='websection1__right__text1'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p className='websection1__right__text1'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
            </p>
            <div className="websection1__right__btn">
                <Webbtn color='#EF4949' topText='لورم ایپسوم' bottomText='لورم ایپسوم متن ساختگی' />
                <Webbtn color='#701FFF' topText='لورم ایپسوم' bottomText=' متن لورم ایپسوم'/>
            </div>
        </section>
        <section className='websection1__left'>
            <img src={web2} alt="" />
        </section>
    </section>
  )
}
