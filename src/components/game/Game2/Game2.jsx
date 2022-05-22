import React from 'react'
import FramerMotion from '../../../FramerMotion'
import './Game2.css'
import Game2box from './Game2box'
import gamebox1 from './../../../Assets/images/gamephoto/gamebox1.png'
import gamebox2 from './../../../Assets/images/gamephoto/gamebox2.png'
import gamebox3 from './../../../Assets/images/gamephoto/gamebox3.png'
import gamebox4 from './../../../Assets/images/gamephoto/gamebox4.png'
import gamebox5 from './../../../Assets/images/gamephoto/gamebox5.png'

export default function Game2() {
  return (
        <section className='game2'>
            <section className='game2__container'>
                <section className='game2__top'>
                    <div className="gametop__title">
                             لورم ایپسوم متن ساختگی
                    </div>
                    <h2 className='gametop__subtitle'>
                             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                    </h2>
                    <p className="gametop__subtitle2">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز                </p>
                </section>
                <section className='game2__content'>
                    <Game2box img={gamebox1} />
                    <Game2box img={gamebox2} direction />
                    <Game2box img={gamebox3} />
                    <Game2box img={gamebox4} direction />
                    <Game2box img={gamebox5} />
                </section>
            </section>
        </section>
  )
}
