import React from 'react'
import './DigitalMarketingTop.css'
import video1 from './../../../Assets/videos/video1.mp4'
export default function DigitalMarketingTop() {
  return (
    <div className='dgtop'>
        <div className="dgtop__container">
            <div className="dgtop__container__right">
                <h1 className="dgtop__container__right__title">
                لورم ایپسوم متن ساختگی با تولید سادگی    
                </h1>
                <p className='dgtop__container__right__subtitle'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <div className="dgtop__container__right__button">
                    <button className='dgtop__container__right__button__right dgtop__container__right__button__btn'>متن ساختگی</button>
                    <button className='dgtop__container__right__button__left dgtop__container__right__button__btn'>متن ساختگی</button>
                </div>
            </div>
            <div className="dgtop__container__left">
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src="https://stage.openmoves.com/wp-content/uploads/2020/02/new-home-page-video.mp4" type="video/ogg"/>
                <source src="https://stage.openmoves.com/wp-content/uploads/2020/02/new-home-page-video.mp4" type="video/mp4"/>
            </video>
            </div>
        </div>
    </div>
  )
}
