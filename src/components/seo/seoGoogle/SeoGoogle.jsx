import React from 'react'
import './SeoGoogle.css'
import seo5 from './../../../Assets/images/seo5.png'
import seo6 from './../../../Assets/images/seo6.png'
import seogoogle from './../../../Assets/images/seogoogle.jpg'
import {BsArrowLeftShort} from 'react-icons/bs'
import didgikala from './../../../Assets/images/digikala.png'
import seo7 from './../../../Assets/images/seo7.png'


export default function SeoGoogle() {

  const googleitem=[
    {id:1,name:'ad manager'},
    {id:2,name:'google ads'},
    {id:3,name:'google marketing platform'},
    {id:4,name:'google analytic'},
    {id:5,name:'google trends'},
    {id:6,name:'google developer'},
  ]
  return (
    <div  className='seogoogle'>
        <div className="seogoogle__container">
        <div className="seogoogle__top">
          <img src={seo5} alt="" />
        </div>
        <section className='seogoogle__main'>
          <section className='seogoogle__main__right'>
            <section className="seogoogle__main__right__top">
              <section className='seogoogle__main__right__top__right'>
                <img src={seogoogle} alt="" />
              </section>
              <section className='seogoogle__main__right__top__left'>
                <h3 className='seogoogle__main__right__top__left__title'>
                  گوگل را در یک پکیج خوشحال کنید
                </h3>
                <p className='seogoogle__main__right__top__left__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
                <div className="seogoogle__main__right__top__left__btn">
                  <div className="seogoogle__main__right__top__left__circle">
                      <BsArrowLeftShort />
                  </div>
                  <p>توضیحات بیشتر</p>
                </div>
              </section>
            </section>
            <section className="seogoogle__main__right__top__google">
                  {googleitem.map(item=>(
                    <p key={item.id} className='seogoogle__main__right__top__google__item'>{item.name}</p>
                  ))}
              </section>
              <section className='seogoogle__main__right__top__customer'>
                    <div className="seogoogle__main__right__top__customer__right">
                      برخی از مشتریان ما
                    </div>
                    <div className="seogoogle__main__right__top__customer__left">
                        <div className="seogoogle__main__right__top__customer__left__item">
                          <div className="seogoogle__main__right__top__customer__left__item__image">
                            <img src={didgikala} alt="" />
                          </div>
                          <p className='seogoogle__main__right__top__customer__left__item__text'>
                            https://digikala.com
                          </p>
                        </div>
                    </div>
              </section>


              <section className="seogoogle__main__right__top seogoogle__main__right__bottom ">
              <section className='seogoogle__main__right__top__right'>
                <img src={seo7} alt="" />
              </section>
              <section className='seogoogle__main__right__top__left'>
                <h3 className='seogoogle__main__right__top__left__title'>
                  گوگل را در یک پکیج خوشحال کنید
                </h3>
                <p className='seogoogle__main__right__top__left__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
                <div className="seogoogle__main__right__top__left__btn">
                  <div className="seogoogle__main__right__top__left__circle">
                      <BsArrowLeftShort />
                  </div>
                  <p>توضیحات بیشتر</p>
                </div>
              </section>
            </section>
          </section>
          <div className="seogoogle__main__left">
            <img src={seo6} alt="" />
          </div>  
        </section>
        </div>
    </div>
  )
}
