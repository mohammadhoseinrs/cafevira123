import React from 'react'
import Appbtn from '../Appbtn'
import './Apptop.css'
import apptop from './../../../Assets/images/apptop.webp'
import Apptoplogo from './Apptoplogo'
import clutch from './../../../Assets/images/applogo/Clutch.png'
import developer from './../../../Assets/images/applogo/developer.png'
import goodfirms from './../../../Assets/images/applogo/GoodFirms.png'
import mad from './../../../Assets/images/applogo/mad.png'
import mobile from './../../../Assets/images/applogo/mobile.png'
import rush from './../../../Assets/images/applogo/Rush.png'

export default function Apptop() {
  return (
    <>
    <section className='apptop'>
      <div className="apptop__background" style={{backgroundImage:`url(${apptop})`}}></div>
        <section className='apptop__container'>
            <h4 className='apptop__container__top'>لورم ایپسوم متن</h4>
            <h1 className='apptop__title'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            </h1>
            <p className='apptop__subtitle'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Appbtn text='لورم ایپسوم متن ساختگی' color='#fff' color2='#701FFF' />
        </section>
    </section>
    <section className='apptop__logo'>
      <div className="apptop__logo__container">
          <Apptoplogo img={clutch} />
          <Apptoplogo img={developer} />
          <Apptoplogo img={goodfirms} />
          <Apptoplogo img={mad} />
          <Apptoplogo img={mobile} />
          <Apptoplogo img={rush} />
      </div>
    </section>
    </>
  )
}
