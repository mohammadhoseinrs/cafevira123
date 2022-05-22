import React from 'react'
import Appbtn from '../Appbtn'
import App3 from './App3'
import './Appsection3.css'
export default function Appsection3() {
  return (
    <section className='appsection3'>
        <section className='appsection3__container'>
            <section className='appsection3__top'>
                <h5>لورم ایپسوم متن</h5>
                <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
            </section>
            <section className='appsection3__bottom'>
                <div className="appsection3__square">
                    <App3 color='#7a29ff' number=' ۵۰۰ +' text=' ایپسوم لورم' />
                    <App3 color='#8433ff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                    <App3 color='#8e3dff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                    <App3 color='#9847ff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                    <App3 color='#a251ff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                    <App3 color='#ac5bff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                    <App3 color='#b665ff' number=' ۵۰۰ +' text=' ایپسوم لورم'/>
                </div>
                <div className="appsection3__bottom__item">
                    <Appbtn text='لورم ایپسوم متن ساختگی' color='#fff' color2='#701FFF' />
                </div>
                <section className='appsection3__bottom__text'>
                    <h2 className='appsection3__bottom__text__title'>
                    لورم ایپسوم متن ساختگی
                    </h2>
                    <div className="appsection3__bottom__text__text">
                        <div className="appsection3__bottom__text__text__right">
                            <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  می باشد
                            </p>
                            <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  می باشد
                            </p>
                        </div>
                        <div className="appsection3__bottom__text__text__left">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  می باشد</p>
                            <div className="appsection3__bottom__text__text__left__item">
                            <ul className='appsection3__bottom__text__text__left__ul'>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                            </ul>
                            <ul className='appsection3__bottom__text__text__left__ul'>    
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                <li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
                            </ul>  
                            </div>  
                        </div>
                    </div>   
                </section>
            </section>
        </section>
    </section>
  )
}
