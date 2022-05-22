import React, { useState } from 'react'
import './Appsection1.css'
import work from './../../../Assets/images/applogo/WorkWithShape.svg'
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io'
import Appbtn from '../Appbtn'

export default function Appsection1() {
    const appsection1=[
        {id:1,title:'طراحی اپلیکیشن موبایل',active:true},
        {id:2,title:'طراحی وب سایت',active:false},
        {id:3,title:'طراحی فول استک',active:false},
        {id:4,title:'طراحی بازی موبایل',active:false},
        {id:5,title:'طراحی اپلیکیشن موبایل',active:false},
    ]
    const [openacc,setopenacc]=useState(appsection1)

    const accordian=(id)=>{
        const newacc=[...appsection1]
        newacc.forEach(acc=>{
            if(acc.id===id){
                return acc.active= true
            }
            acc.active=false
        })
        setopenacc(newacc)
    }
  return (
      <>
    <section className='appsection1'>
        <div className='appsection1__container'>
            <section className='appsection1__top'>
                <p>لورم ایپسوم</p>
                <h2>لورم ایپسوم متن ساختگی</h2>
            </section>
            <section className='appsection1__bottom'>
                {openacc.map(app=>(
                      <div key={app.id} className="appsection1__bottom__item">
                    <div className={app.active ? 'appsection1__bottom__item__top':'appsection1__bottom__item__top2'} onClick={()=>accordian(app.id)} >
                        <div className="appsection1__bottom__item__top__title">
                        {app.title}
                        </div>
                        <div className={app.active ? 'appsection1__bottom__item__top__right':'appsection1__bottom__item__top__right2'}>
                            {app.active ? (
                                <IoIosArrowUp size={20}/>
                            ):(
                                <IoIosArrowDown size={20} />    
                            )}
                        
                        </div>
                    </div>
                    <div className={app.active ? 'appsection1__bottom__item__bottom':'appsection1__bottom__item__bottom2'}>
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                    </div>
                </div>
                ))}
            </section>
            <div className="appsection1__btn">
                <Appbtn text='لورم ایپسوم متن'  color='#701FFF' color2='#fff' />
            </div>
        </div>
    </section>
    </>
  )
}
