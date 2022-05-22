import React from 'react'
import './Websection4.css'
import Websection4Box from './Websection4Box'
export default function Websection4() {
  return (
    <section className='websection4'>
        <section className='websection4__container'>
            <section className='websection4__top'>
                <p>لورم ایپسوم ...</p>
                <p>لورم ایپسوم متن ساختگی</p>
            </section>
            <section className='websection4__bottom'>
                <Websection4Box text='لورم ایپسوم متن ساختگی با تولید' />
                <Websection4Box text='لورم ایپسوم متن ساختگی با تولید' />
                <Websection4Box text='لورم ایپسوم متن ساختگی با تولید' />
            </section>
        </section>
    </section>
  )
}
