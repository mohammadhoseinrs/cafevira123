import React, { useState } from 'react'
import './Websection3.css'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import websvg2 from './../../../Assets/images/websvg2.svg'
import websvg3 from './../../../Assets/images/websvg3.svg'
import websvg4 from './../../../Assets/images/websvg4.svg'

import Webbtn from '../websection1/Webbtn'

export default function Websection3() {
    const websection2=[
        {id:1,title:'طراحی وب',active:false,img:websvg2 , item:{
            title:' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه  اصلی'
        }},
        {id:2,title:'طراحی سایت',active:true, img:websvg3 , item:{
            title:' لورم ایپسوم متن ساختگی با تولید  نامفهوم از  ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه  اصلی'
        }},
        {id:3,title:'طراحی اپلیکیشن',active:false,img:websvg4 , item:{
            title:' لورم ایپسوم متن ساختگی با تولید سادگی  از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه  اصلی'
        }},
        {id:4,title:'طراحی گیم',active:false,img:websvg3 , item:{
            title:' لورم ایپسوم متن ساختگی با تولید   از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه  اصلی'
        }},
    ]
    const [weblist,setweblist]=useState(websection2)
    const handleitem=(id)=>{
        console.log(id);
        const webitem=[...websection2]
        webitem.forEach(item=>{
            if(item.id===id){
                return item.active= true
            }
            item.active=false
            console.log(weblist);
        })
        setweblist(webitem)

    }
  return (
    <section className='websection2 '>
    <div className="websection2__right">
        {weblist.map(web=>(
            <div key={web.id} className='websection2__right__item' onClick={()=>handleitem(web.id)}>
                <p className={web.active ? 'websection2__right__active' : ''} >{web.title}</p>
            </div>
        ))}
    </div>
    <section className='websection2__middle'>
        {weblist.map(web=>(
            <div className={web.active ? "websection2__middle__inner" : 'websection2__middle__inner2'}>
            <h2 className='websection1__right__title'>
                {web.item.title}
        </h2>
        <p className='websection1__right__text1'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <p className='websection1__right__text1'>
            {web.item.content}
        </p>
        <div className="websection3__middle__inner__bottom">
        <Webbtn color='#701FFF' topText='لورم ایپسوم' bottomText=' متن لورم ایپسوم'/>
        </div>
            </div>
        ))}
    </section>
    <section className='websection3__left'>
    {weblist.map(web=>(
            <div key={web.id} className={web.active ? "websection3__middle__inner" : 'websection3__middle__inner2'} onClick={()=>handleitem(web.id)}>
                <img src={web.img} alt="" />
            </div>
        ))}
    </section>
</section>
  )
}
