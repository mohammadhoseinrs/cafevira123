import React from 'react'
import './Appsection2.css'
import Appbox2 from './Appbox2'
import app1 from './../../../Assets/images/app1.png'
import app2 from './../../../Assets/images/app2.png'
import app3 from './../../../Assets/images/app3.jpeg'
import app4 from './../../../Assets/images/app4.png'
import app5 from './../../../Assets/images/app5.jpeg'
import app6 from './../../../Assets/images/app6.png'
import php from './../../../Assets/images/php.png'
import react from './../../../Assets/images/react.png'
import yi from './../../../Assets/images/yi.png'
import Appbtn from '../Appbtn'
export default function Appsection2() {
  return (
      <>
    <section className='appsection2'>
        <section className='appsection2__container'>
            <section className="appsection2__top">
                <Appbox2 Mainimg={app1} boximg={app2} projeimg1={php} projeimg2={react} projeimg3={yi} />
            </section>
            <section className="appsection2__middle">
            <Appbox2 Mainimg={app4} boximg={app3} projeimg1={php} projeimg2={react} projeimg3={yi} />
            </section>
            <section className="appsection2__bottom">
            <Appbox2 Mainimg={app6} boximg={app5} projeimg1={php} projeimg2={react} projeimg3={yi} />
            </section>
        </section>
    </section>
    <div className="appsection2__btn">
       <Appbtn text='اضافه لورم ایپسوم متن'  color='#701FFF' color2='#fff' />
    </div>
    </>       

  )
}
