import React from 'react'
import './SeoAcademy.css'
import seoacademy from './../../../Assets/images/seoacademy.png'

export default function SeoAcademy() {
  return (
    <section className='SeoAcademy'>
        <h2 className='SeoAcademy__title'>آکادمی ویرا</h2>
        <div className="SeoAcademy__container">
            <section className='SeoAcademy__right'>
            <h4 className='SeoAcademy__right__title'>
            لورم ایپسوم متن ساختگی با تولید   از صنعت چاپ و با استفاده   
            </h4>
            <section className='SeoAcademy__right__container'>
                <div className="SeoAcademy__right__item">
                    <div className="SeoAcademy__right__item__image">
                        <img src={seoacademy} alt="" />
                    </div>
                    <div className="SeoAcademy__right__item__box">
                        <h5 className='SeoAcademy__right__item__box__title'>
                        لورم ایپسوم متن ساختگی با تولید
                        </h5>
                        <p className="SeoAcademy__right__item__box__text">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                    </div>
                </div>

                <div className="SeoAcademy__right__item">
                    <div className="SeoAcademy__right__item__image">
                        <img src={seoacademy} alt="" />
                    </div>
                    <div className="SeoAcademy__right__item__box">
                        <h5 className='SeoAcademy__right__item__box__title'>
                        لورم ایپسوم متن ساختگی با تولید
                        </h5>
                        <p className="SeoAcademy__right__item__box__text">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                    </div>
                </div>

                <div className="SeoAcademy__right__item">
                    <div className="SeoAcademy__right__item__image">
                        <img src={seoacademy} alt="" />
                    </div>
                    <div className="SeoAcademy__right__item__box">
                        <h5 className='SeoAcademy__right__item__box__title'>
                        لورم ایپسوم متن ساختگی با تولید
                        </h5>
                        <p className="SeoAcademy__right__item__box__text">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                    </div>
                </div>
            </section>
            </section>
            <section className='SeoAcademy__left'>
                <h5>ویکی پدیا ویرا</h5>
                <div className="SeoAcademy__left__box">
                    <div className="SeoAcademy__left__input">
                        <input className='SeoAcademy__left__box__input' type="text" name="" id="" placeholder='جستجو ...'/>
                    </div>
                    <div className="SeoAcademy__left__box__item">
                        <p className='SeoAcademy__left__box__item__text1'>سیو</p>
                        <p className='SeoAcademy__left__box__item__text2'>seo</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}
