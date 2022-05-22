import React from 'react'
import './Game3.css'
import {FaCheckCircle} from 'react-icons/fa'
import cube1 from './../../../Assets/images/gamebox/cube1.png'
import cube2 from './../../../Assets/images/gamebox/cube2.png'
import cube3 from './../../../Assets/images/gamebox/cube3.png'
import cube4 from './../../../Assets/images/gamebox/cube4.png'
import cube5 from './../../../Assets/images/gamebox/cube5.png'
import cube6 from './../../../Assets/images/gamebox/cube6.png'
import cube7 from './../../../Assets/images/gamebox/cube7.png'
import FramerMotion from '../../../FramerMotion'

export default function Game3() {
  return (
    <section className='game3'>
        <section className='game3__container'>
            <div className="game3__circle"></div>
            <div className="game3__center">
                <div className="game3__wrap">
                    <div className="game3__wrap__top">
                        <h2 className='game3__wrap__top__title'>
                        لورم ایپسوم متن ساختگی با تولید چاپ
                        </h2>
                        <h1 className='game3__wrap__top__subtitle'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </h1>
                        <p className='game3__wrap__top__subtitle2'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                        <div className="game3__wrap__top__item game3__wrap__top__item2">
                            <FaCheckCircle />
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                        <div className="game3__wrap__top__item">
                            <FaCheckCircle />
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                        <div className="game3__wrap__top__item">
                            <FaCheckCircle />
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>
                        <button className='game3__wrap__top__btn'>
                        لورم ایپسوم متن ساختگی
                        </button>
                    </div>
                </div>
                <div className="game3__figure">
                    <FramerMotion>
                    <img className='game3__cube1' src={cube1} alt="" />
                    <img className='game3__cube2' src={cube2} alt="" />
                    <img className='game3__cube3' src={cube3} alt="" />
                    <img className='game3__cube4' src={cube4} alt="" />
                    <img className='game3__cube5' src={cube5} alt="" />
                    <img className='game3__cube6' src={cube6} alt="" />
                    <img className='game3__cube7' src={cube7} alt="" />
                    </FramerMotion>
                </div>
            </div>
        </section>
    </section>
  )
}