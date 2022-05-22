import React from 'react'
import Webbtn from '../websection1/Webbtn'
import './Websectionfooter.css'
import webfooter from './../../../Assets/images/webdesignfooter.svg'
export default function Websectionfooter() {
  return (
    <section className='websectionfooter'>
        <section className='websectionfooter__top'>
            <h2 className='websectionfooter__top__top'> 
            لورم ایپسوم متن
            </h2>
            <h3 className=''>
            لورم ایپسوم متن ساختگی
            </h3>
            <p className='websectionfooter__top__text'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
            </p>
            <Webbtn color='#701FFF' topText='لورم ایپسوم' bottomText=' متن لورم ایپسوم'/>
        </section>
        <section className='websectionfooter__middle'>
            <img src={webfooter} alt="" />
        </section>
    </section>
  )
}
