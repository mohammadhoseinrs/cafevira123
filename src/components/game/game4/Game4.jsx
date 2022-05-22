import React from 'react'
import './Game4.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Game4() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className='game4'>
        <section className='game4__container'>
        <Slider {...settings}>
          <div className='game4__slider__item'>
            <div className="game4__slider__item__right">
            <section className='game1__top'>
                <div className="gametop4__title">
                    لورم ایپسوم متن ساختگی
                </div>
                <h2 className='gametop4__subtitle'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                </h2>
                <p className="gametop4__subtitle2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                </p>
                </section>
            </div>
            <div className="game4__slider__item__left">
                
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
        </section>
    </section>
  )
}
