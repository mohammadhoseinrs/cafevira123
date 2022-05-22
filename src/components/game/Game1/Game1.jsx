import React from 'react'
import FramerMotion from '../../../FramerMotion'
import './Game1.css'
import gamelogo1 from './../../../Assets/images/gamelogo/gamelogo1.svg'
import gamelogo2 from './../../../Assets/images/gamelogo/gamelogo2.svg'
import gamelogo3 from './../../../Assets/images/gamelogo/gamelogo3.svg'
import gamelogo4 from './../../../Assets/images/gamelogo/gamelogo4.svg'
import gamelogo5 from './../../../Assets/images/gamelogo/gamelogo5.svg'
import gamelogo6 from './../../../Assets/images/gamelogo/gamelogo6.svg'
import gamelogo7 from './../../../Assets/images/gamelogo/gamelogo7.svg'
import gamelogo8 from './../../../Assets/images/gamelogo/gamelogo8.svg'
import gamelogo9 from './../../../Assets/images/gamelogo/gamelogo9.svg'
import gamelogo10 from './../../../Assets/images/gamelogo/gamelogo10.svg'
import gamelogo11 from './../../../Assets/images/gamelogo/gamelogo11.svg'
import gamelogo12 from './../../../Assets/images/gamelogo/gamelogo12.svg'
import figure2 from './../../../Assets/images/figure-2.png'

export default function Game1() {
    const gamedata=[
        {id:1,img:gamelogo1,text:'اپلیکیشن موبایل'},
        {id:2,img:gamelogo2,text:'دولوپر'},
        {id:3,img:gamelogo3,text:'بلاک چین'},
        {id:4,img:gamelogo4,text:'بازی NFT'},
        {id:5,img:gamelogo5,text:'بک اند'},
        {id:6,img:gamelogo6,text:'بازی'},
        {id:7,img:gamelogo7,text:'پرسش و پاسخ'},
        {id:8,img:gamelogo8,text:'پی اچ پی'},
        {id:9,img:gamelogo9,text:'اندروید'},
        {id:10,img:gamelogo10,text:'ریکت نیتیو'},
        {id:11,img:gamelogo11,text:'فرانت اند'},
        {id:12,img:gamelogo12,text:'ای او اس'},
    ]
  return (
    
        <section className='game1'>
            <section className='game1__container'>
                <section className='game1__top'>
                <div className="gametop__title">
                    لورم ایپسوم متن ساختگی
                </div>
                <h2 className='gametop__subtitle'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                </h2>
                <p className="gametop__subtitle2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                </p>
                </section>
                <FramerMotion>
                <section className='game1__content'>
                    {gamedata.map(game=>(
                        <div key={game.id} className="game1__content__item">
                            <div className="game1__content__item__image">
                                <img src={game.img} alt="" />
                            </div>
                            <p>{game.text}</p>
                        </div>
                    ))}
                </section>
                </FramerMotion>
                <div className="game1__container__image">
                    <img src={figure2} alt="" />
                </div>
            </section>
        </section>
        
  )
}
