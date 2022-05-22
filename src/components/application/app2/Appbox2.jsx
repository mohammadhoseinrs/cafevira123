import React from 'react'
import './Appsection2.css'

import Appbtn from '../Appbtn'
export default function Appbox2({Mainimg,boximg ,projeimg1,projeimg2,projeimg3}) {
  return (
      <>
    <section className='appsection2__top__right'>
                    <img src={boximg} alt="" />
                </section>
                <section className='appsection2__top__left'>
                    <div className="appsection2__top__left__top">
                        <div className="appsection2__top__left__top__right">
                            <img src={Mainimg} alt="" />
                        </div>
                        <div className="appsection2__top__left__top__left">
                        لورم ایپسوم متن
                        </div>
                    </div>
                    <div className="appsection2__top__left__middle">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </div>
                    <div className="appsection2__top__left__bottom">
                        <h2>
                            تکنولوزی مورد استفاده
                        </h2>
                        <div className="appsection2__top__left__bottom__img">
                            <img src={projeimg1} alt="" />
                            <img src={projeimg2} alt="" />
                            <img src={projeimg3} alt="" />
                        </div>
                        <Appbtn text='مشاهده' color='#701FFF' color2='#fff' />
                    </div>
                </section>
    </>
  )
}
