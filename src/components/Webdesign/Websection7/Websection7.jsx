import React from 'react'
import './Websection7.css'
import websvg from './../../../Assets/images/websvg.svg'
import triangle from './../../../Assets/images/triangle.svg'
import witsle from './../../../Assets/images/witsle.svg'
import Websection7box from './Websection7box'
import {BsCheck}  from 'react-icons/bs'
import WebSquare7 from './WebSquare7'

export default function Websection7() {
  return (
    <section className='websection7' style={{backgroundImage: `url(${triangle})`}}>
        <div className="websvg7">
            <img src={websvg} alt="" />
        </div>
        <div className="websection7__container">
            <section className='websection7__top'>
                <h1 className='websection7__top__title'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h1>
                <p className='websection7__top__subtitle'>
                لورم ایپسوم متن ساختگی با تولید سادگی
                </p>
            </section>
            <section className='websection7__bottom'>
                <section className='websection7__bottom__right'>
                    <Websection7box />
                    <Websection7box />
                    <Websection7box />
                    <Websection7box />
                    <Websection7box />
                    <Websection7box />
                </section>
                <section className='websection7__bottom__left'>
                      <img src={witsle} alt="" />
                </section>
            </section>
        </div>
        <section className='websection7__squre'>
            <WebSquare7 />
            <WebSquare7 />
            <WebSquare7 />
            <WebSquare7 />
        </section>
    </section>
  )
}
