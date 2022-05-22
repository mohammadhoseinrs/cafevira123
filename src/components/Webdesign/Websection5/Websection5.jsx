import React, { useState } from 'react'
import './Websection5.css'
import webs51 from './../../../Assets/images/websection5.png'
import webs52 from './../../../Assets/images/websection5-2.png'
import webs53 from './../../../Assets/images/websection5-3.webp'
import webs54 from './../../../Assets/images/websection5-4.png'

export default function Websection5() {
    const websection5=[
        {id:1,title:'وب طراحی' , img:webs51 ,active:true},
        {id:2,title:'طراحی' , img:webs52 , active:false},
        {id:3,title:'جاوا اسکریپت' , img:webs53 ,active:false},
        {id:4,title:'مارکتینگ' , img:webs54 ,active:false},

    ]
    const [webitem,setwebitem]=useState(websection5)
    const handleclick=(id)=>{
        console.log(id);
        const webclick=[...websection5]
        webclick.forEach(item=>{
            if(item.id===id){
                return item.active=true
            }
            item.active=false
        })
        setwebitem(webclick)
    }

  return (
    <section className='websection5'>
        <section className='websection5__container'>
            <h1 className='websection5__title'>
            لورم ایپسوم متن ساختگی با تولید
            </h1>
            <div className="websection5__body">
                <div className="websection5__body__top" >
                        {webitem.map(web=>(
                                 <div onClick={()=>handleclick(web.id)} key={web.id} className='websection5__body__top__item'>
                                     <p >{web.title}</p>
                                     <div className={web.active ?'websection5__body__top__main':'websection5__body__top__main2'}>
                                           <div className="websection5__body__top__item__item"></div>
                                     </div>     
                                 </div>                       
                                  ))}
                </div>
                <div className="websection5__body__bottom">
                    {webitem.map(webitem=>(
                        <div className={webitem.active ? 'websection5__body__bottom__item':'websection5__body__bottom__item2'}>
                            <img  src={webitem.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </section>
  )
}
