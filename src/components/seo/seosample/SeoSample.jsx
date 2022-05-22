import React from 'react'
import './SeoSample.css'
import seo5 from './../../../Assets/images/seo5.png'
import seoslider from './../../../Assets/images/seoslider.png'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function SeoSample() {
    const seoSlider=[
      {id:1,img:seoslider},
      {id:2,img:seoslider},
      {id:3,img:seoslider},
      {id:4,img:seoslider},
      {id:5,img:seoslider},
      {id:6,img:seoslider},
    ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
  };

  return (
    <>
    <section className='seosample'>
        <section className='seosample__top'>
            <h3 className='seosample__top__title'>
                آخرین نمونه کار ها
            </h3>
            <p className='seosample__top__subtitle'>
                از توانایی و مهارت تیم ویرا مطمین شوید
            </p>
        </section>
        <section className='seosample__bottom'>
        <Slider {...settings}>
          {seoSlider.map(slider=>(
            <div key={slider.id} className="seosample__bottom__slider__item">
              <div className="seosample__bottom__slider__item__top">
                <img src={slider.img} alt="" />
              </div>
              <div className="seosample__bottom__slider__item__bottom">
                <div className="seosample__bottom__slider__item__bottom__top">
                  <div className="seosample__bottom__slider__item__bottom__top__text">
                      تولید محتوا
                  </div>
                  <div className="seosample__bottom__slider__item__bottom__top__title">
                    فروشگاه اینترنتی دیجی کالا
                  </div>
                </div>
                <div className="seosample__bottom__slider__item__bottom__bottom">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی  
                </div>
              </div>
          </div>
          ))}
        </Slider>
        </section>
    </section>
    <div className="seogoogle__top">
    <img src={seo5} alt="" />
  </div>
  </>
  )
}
