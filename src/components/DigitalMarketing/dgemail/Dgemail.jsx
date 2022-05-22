import React from 'react'
import './dgemail.css'
export default function Dgemail() {
  return (
    <section  className='dgemail'>
      <div className="dgemail__container">
        <h2 className='dgemail__title'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h2>
        <p className='dgemail__subtitle'>
        لورم ایپسوم متن ساختگی با تولید سادگی از  
        </p>
        <div className="dgemail__input">
          <input className='dgemail__input__input' type="text" placeholder='ایمیل خود را وارد کنید' />
          <button className='dgemail__input__btn'>دنبال کردن</button>
        </div>
      </div>
    </section>
  )
}
