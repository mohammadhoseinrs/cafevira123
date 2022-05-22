import React from 'react'
import './Shoppingfreeitem.css'
import shDownload from './../../../Assets/images/shDownload.jpg'

export default function Shoppingfreeitem() {
  return (
    <section className='Shoppingfreeitem'>
        <div className="Shoppingfreeitem__container">
            <div className="Shoppingfreeitem__top">
                <h1 className="Shoppingfreeitem__top__title">
                    کافه ویرا
                </h1>
                <p className='Shoppingfreeitem__top__text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و  را می طلبد</p>
            </div>
            <section className="Shoppingfreeitem__bottom">
            <div className="ShoppingDownload__left__item">
                    <div className="ShoppingDownload__left__item__image">
                        <img src={shDownload} alt="" />
                    </div>
                    <div className="ShoppingDownload__left__item__bottom">
                        <div className="ShoppingDownload__left__item__bottom__right">
                            <p className='ShoppingDownload__left__item__bottom__title'>لورم ایپسوم   با تولید سادگی  از  چاپ</p>
                            <p className='ShoppingDownload__left__item__bottom__subtitle'>لورم ایپسوم   با تولید سادگی از چاپ</p>
                        </div>
                    </div>
                </div>

                <div className="ShoppingDownload__left__item">
                    <div className="ShoppingDownload__left__item__image">
                        <img src={shDownload} alt="" />
                    </div>
                    <div className="ShoppingDownload__left__item__bottom">
                        <div className="ShoppingDownload__left__item__bottom__right">
                            <p className='ShoppingDownload__left__item__bottom__title'>لورم ایپسوم   با تولید سادگی  از  چاپ</p>
                            <p className='ShoppingDownload__left__item__bottom__subtitle'>لورم ایپسوم   با تولید سادگی از چاپ</p>
                        </div>
                    </div>
                </div>

                <div className="ShoppingDownload__left__item">
                    <div className="ShoppingDownload__left__item__image">
                        <img src={shDownload} alt="" />
                    </div>
                    <div className="ShoppingDownload__left__item__bottom">
                        <div className="ShoppingDownload__left__item__bottom__right">
                            <p className='ShoppingDownload__left__item__bottom__title'>لورم ایپسوم   با تولید سادگی  از  چاپ</p>
                            <p className='ShoppingDownload__left__item__bottom__subtitle'>لورم ایپسوم   با تولید سادگی از چاپ</p>
                        </div>
                    </div>
                </div>

                <div className="ShoppingDownload__left__item">
                    <div className="ShoppingDownload__left__item__image">
                        <img src={shDownload} alt="" />
                    </div>
                    <div className="ShoppingDownload__left__item__bottom">
                        <div className="ShoppingDownload__left__item__bottom__right">
                            <p className='ShoppingDownload__left__item__bottom__title'>لورم ایپسوم   با تولید سادگی  از  چاپ</p>
                            <p className='ShoppingDownload__left__item__bottom__subtitle'>لورم ایپسوم   با تولید سادگی از چاپ</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </section>
  )
}
