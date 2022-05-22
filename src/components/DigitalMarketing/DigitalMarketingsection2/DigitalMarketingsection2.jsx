import React from 'react'
import './DigitalMarketingsection2.css'
import logo from './../../../Assets/images/om3-icon.png'
import ellipse from './../../../Assets/images/ellipse.png'
import star from './../../../Assets/images/star.png'
import winter1 from './../../../Assets/images/winter1.png'
import winter2 from './../../../Assets/images/winter2.png'
import winter3 from './../../../Assets/images/winter3.png'
import winter4 from './../../../Assets/images/winter4.png'



export default function DigitalMarketingsection2() {
    const winterdata=[
        {id:1,image:winter1},
        {id:2,image:winter2},
        {id:3,image:winter1},
        {id:4,image:winter3},
        {id:5,image:winter4},

    ]
  return (
    <section className='dgsection2'>
        <section className='dgsection2__container'>
            <section className='dgsection2__right'>
                <img src={ellipse} alt="" />
            </section>
            <section className='dgsection2__left'>
                <div className="dgsection2__left__img">
                    <img src={logo} alt="" />
                </div>
                <h2 className='dgsection2__left__title'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h2>
                <p className='dgsection2__left__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <button className='dgsection2__left__btn'>
                    بیشتر بخوانید
                </button>
            </section>
        </section>
        <section className='dgsection2__bottom'>
            <h3 className='dgsection2__bottom__top'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h3>
            <img className='dgsection2__bottom__img' src={star} alt="" />
            <div className="dgsection2__bottom__image">
                {winterdata.map(winter=>(
                 <img key={winter.id} src={winter.image} alt="" />
                ))}
            </div>
        </section>
    </section>
  )
}
