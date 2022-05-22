import React from 'react'
import './ShoppingTheme.css'
import cover1 from './../../../Assets/images/cover1.png'
export default function ShoppingTheme() {
  return (
    <section className='shoopingtheme'>
        <div className="shoppingtheme__container">
            <section className="shoppingtheme__container__right">
                <div className="shoppingtheme__container__right__inner">
                <p className='shoppingtheme__container__right__text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <button className="ShoppingCategory__container__btn">
                مشاهده همه آیتم ها
            </button>
            </div>
            </section>
            <section className='shoppingtheme__container__left'>
                <div className="shoppingtheme__container__left__content">
                    <div className="shoppingtheme__container__left__content_box">
                        <div className="shoppingtheme__container__left__content_box__image" style={{backgroundImage:`url(${cover1})`}}>
                            <div className="shoppingtheme__container__left__content_box__image__inner">
                                <div className="shoppingtheme__container__left__content_box__image__inner__title">
                           لورم ایپسوم متن ساختگی با تولید سادگی    
                                </div>
                                <div className="shoppingtheme__container__left__content_box__image__inner__title__bottom">
                                    <p>توسط مهدی</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shoppingtheme__container__left__content_box">
                        <div className="shoppingtheme__container__left__content_box__image" style={{backgroundImage:`url(${cover1})`}}>
                        
                        </div>
                    </div>


                    <div className="shoppingtheme__container__left__content_box">
                        <div className="shoppingtheme__container__left__content_box__image" style={{backgroundImage:`url(${cover1})`}}>
                            
                        </div>
                    </div>


                    <div className="shoppingtheme__container__left__content_box">
                        <div className="shoppingtheme__container__left__content_box__image" style={{backgroundImage:`url(${cover1})`}}>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    </section>
  )
}
