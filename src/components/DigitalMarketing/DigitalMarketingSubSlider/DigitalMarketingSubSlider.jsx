import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './DigitalMarketingSubSlider.css'
import subslider1 from './../../../Assets/images/subslider/rel-logo-1-1.png'
import subslider2 from './../../../Assets/images/subslider/rel-logo-1-2.png'
import subslider3 from './../../../Assets/images/subslider/rel-logo-1-3.png'
import subslider4 from './../../../Assets/images/subslider/rel-logo-1-4.png'
import subslider5 from './../../../Assets/images/subslider/rel-logo-1-5.png'
import subslider6 from './../../../Assets/images/subslider/rel-logo-2-1.png'
import subslider7 from './../../../Assets/images/subslider/rel-logo-2-2.png'
import subslider8 from './../../../Assets/images/subslider/rel-logo-2-3.png'
import subslider10 from './../../../Assets/images/subslider/rel-logo-2-4.png'
import subslider11 from './../../../Assets/images/subslider/rel-logo-2-5.png'
import subslider12 from './../../../Assets/images/subslider/rel-logo-3-1.png'
import subslider13 from './../../../Assets/images/subslider/rel-logo-3-2.png'
import subslider14 from './../../../Assets/images/subslider/rel-logo-3-3.png'
import subslider15 from './../../../Assets/images/subslider/rel-logo-3-4.png'
import subslider16 from './../../../Assets/images/subslider/rel-logo-3-5.png'



export default function DigitalMarketingSubSlider() {
    const subslider=[
        {id:1,image:subslider1},
        {id:2,image:subslider2},
        {id:3,image:subslider3},
        {id:4,image:subslider4},
        {id:5,image:subslider5},
        {id:6,image:subslider6},
        {id:7,image:subslider7},
        {id:8,image:subslider8},
        {id:10,image:subslider10},
        {id:11,image:subslider11},
        {id:12,image:subslider12},
        {id:13,image:subslider13},
        {id:14,image:subslider14},
        {id:15,image:subslider15},
        {id:16,image:subslider16}

    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
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
    <div className='dgt__sub'>
        <Slider {...settings}>
            {subslider.map(sub=>(
                <div id={sub.id} className="subslider__item">
                    <img src={sub.image} alt="" />
                </div>
            ))}
        </Slider>
    </div>
  )
}
