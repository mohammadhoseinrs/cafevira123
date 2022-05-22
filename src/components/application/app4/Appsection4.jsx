import React from 'react'
import './Appsection4.css'
import diagram from './../../../Assets/images/Diagram.svg'
import Appbtn from '../Appbtn'
export default function Appsection4() {
  return (
    <section className='appsection4'>
      <section className='appsection4__top'>
        <h5>لورم ایپسوم متن</h5>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
      </section>
      <section className='appsection4__bottom'>
        <img src={diagram} alt="" />
      </section>
      <div className="appsection4__btn">
          <Appbtn text='لورم ایپسوم متن'  color='#701FFF' color2='#fff' />
      </div>
    </section>
  )
}
