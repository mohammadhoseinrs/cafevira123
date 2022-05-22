import React from 'react'
import './DigitalMarketingtext1.css'
import dg1 from './../../../Assets/images/dg1.png'
import dg2 from './../../../Assets/images/dg2.png'
import dg3 from './../../../Assets/images/dg3.png'
import dg4 from './../../../Assets/images/dg4.jpg'

export default function DigitalMarketingtext1() {
    let dgtdata=[
        {id:1,image:dg1,title:'تولید سادگی نامفهوم',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با را برای طراحان رایانه ای علی الخصوص طراحان خلاقی'},
        {id:2,image:dg2,title:'تولید سادگی نامفهوم',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با را برای طراحان رایانه ای علی الخصوص طراحان خلاقی'},
        {id:3,image:dg3,title:'تولید سادگی نامفهوم',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با را برای طراحان رایانه ای علی الخصوص طراحان خلاقی'},
        {id:4,image:dg4,title:'تولید سادگی نامفهوم',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با را برای طراحان رایانه ای علی الخصوص طراحان خلاقی'},
    ]
  return (
    <div className='dgtext1'>
        <div className="dgtext1__container">
            <h2 className="dgtext1__top">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h2>
            <div className="dgtext1__content">
                {dgtdata.map(item=>(
                    <div className="dgtext1__content__item" key={item.id}>
                        <div className="dgtext1__content__top">
                            <div className="dgtext1__content__top__image">
                                <img src={item.image} alt="" />
                            </div>
                            <p className="dgtext1__content__top__title">
                                {item.title}
                            </p>
                        </div>
                        <p className="dgtext1__content__text">
                            {item.text}
                        </p>
                        <button className='dgtext1__content__item__btn'>بیشتر بخوانید</button>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}
