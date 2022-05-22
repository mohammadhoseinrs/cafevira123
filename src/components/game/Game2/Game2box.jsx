import React from 'react'
import FramerMotion from '../../../FramerMotion'

export default function Game2box({img ,direction}) {
  return (
    <section className={direction ? 'game2box' :'game2box2'}>
        <section className='game2box__right'>
            <h4 className='game2box__right__subtitle'>
                قدم اول
            </h4>
            <h2 className='game2box__right__title'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </h2>
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
        </section>
        
        <section className='game2box__left'>
        <FramerMotion>
            <img src={img} alt="" />
        </FramerMotion>
        </section>
        
    </section>
  )
}
