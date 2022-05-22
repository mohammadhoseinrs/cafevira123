import React, { useState } from 'react'
import './Websection2.css'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import websvg from './../../../Assets/images/websvg.svg'
import Webbtn from '../websection1/Webbtn'
export default function Websection2() {
    const websection2=[
        {id:1,title:'طراحی وب',active:false , item:{
            title:' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی'
        }},
        {id:2,title:'طراحی سایت',active:true , item:{
            title:' لورم ایپسوم متن ساختگی با تولید  نامفهوم از  ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی'
        }},
        {id:3,title:'طراحی اپلیکیشن',active:false , item:{
            title:' لورم ایپسوم متن ساختگی با تولید سادگی  از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی'
        }},
        {id:4,title:'طراحی گیم',active:false , item:{
            title:' لورم ایپسوم متن ساختگی با تولید   از صنعت ',
            content:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی'
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
      <>
    <section className='websection2'>
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
        <div className="websection2__middle__inner__bottom">
        <div className="websection2__middle__inner__bottom__right">
                <p>لورم اپیسوم</p>
                <IoIosArrowDropleftCircle color='#701FFF' />
            </div>
            <div className="websection2__middle__inner__bottom__right">
                <p>لورم اپیسوم</p>
                <IoIosArrowDropleftCircle color='#701FFF' />
            </div>
        </div>
            </div>
        ))}
    </section>
    <section className='websection2__left'>
    {weblist.map(web=>(
            <div key={web.id} className='websection2__left__item' onClick={()=>handleitem(web.id)}>
                <p className={web.active ? 'websection2__left__active' : 'websection2__left__active2'} >{web.title}</p>
            </div>
        ))}
    </section>
</section>
<div className="websection2__footer">
    <img src={websvg} alt="" />
</div>
</>
  )
}
