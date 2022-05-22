import React, { useEffect, useRef } from 'react'
import './DigitalMarketingSlider.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slider1 from './../../../Assets/images/slider1.jpg'
import slider2 from './../../../Assets/images/slider2.jpg'
import slider3 from './../../../Assets/images/slider3.jpg'
import {IoIosArrowForward ,IoIosArrowBack} from 'react-icons/io'
export default function DigitalMarketingSlider() {
    const sliderRef=useRef(null)
    useEffect(()=>{
    console.log(sliderRef.current)
    },[])
    const dgslider=[
        {id:1,img:slider1},
        {id:2,img:slider2},
        {id:3,img:slider3},
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  return (
    <div className="dgt__slider">
        <Slider ref={sliderRef} {...settings}>
            {dgslider.map(slider=>(
                <>
              <div className="dgt__slider__item">
                <img src={slider.img} alt="" />
                <div className="dgt__slider__item__content">
                    <IoIosArrowBack onClick={()=>sliderRef.current.slickPrev()} />
                    <div className="dgt__slider__item__inner">
                        <div className="dgt__slider__item__inner__inner">
                        <div className="dgt__slider__item__inner__top">
                            <div className="dgt__slider__item__inner__top__right">
                            لورم ایپسوم
                            </div>
                            <div className="dgt__slider__item__inner__top__left">
                            لورم ایپسوم متن
                            </div>
                        </div>
                        <h3 className="dgt__slider__item__inner__title">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </h3>
                        <p className='dgt__slider__item__inner__text'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                        <button className='dgt__slider__item__inner__btn'>مجله روزنامه</button>
                        </div>
                    </div>
                    <IoIosArrowForward onClick={()=>sliderRef.current.slickNext()}  />
                </div>
             </div>  
             </>
            ))}
        
        </Slider>
        </div>
  )
}
