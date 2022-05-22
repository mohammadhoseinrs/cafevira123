import React from 'react'
import './Worksampletest.css'
import {IoIosArrowDown} from 'react-icons/io'
import curve from './curve.svg'

const workslideritem=[
    {id:1,title:' وب سایت',active:true},
    {id:2,title:'اپلیکیشن',active:false},
    {id:3,title:'بازی سازی',active:false},
    {id:4,title:'موشن گرافیک',active:false},
    {id:5,title:'طراحی تبلیغاتی',active:false},
    {id:6,title:'سئو',active:false},
]
export default function Worksampletest() {
    const [list, setList] = React.useState(workslideritem);
    const handleSlider=(id)=>{
        const workitem=[...workslideritem]
        workitem.forEach(item=>{
           if(item.id===id){
             return item.active= !item.active
           }
            item.active=false
       })
       setList(workitem)
    }
  return (
    <div className='test'>
        <div className="test__container">
            <div className="test__container__image">
                <img src={curve} alt="" />
                <IoIosArrowDown size={30} color='#6523F7' className='test__container__image__icon' />
            </div>
            <div className="test__container__background">
                <div className="test__container__background__content">
                    <div className="test__container__background__content__title">آخرین نمونه کارهای ما</div>
                    <div className="test__container__background__content__subtitle">دسته بندی  موردنظر  خودتون  رو  انتخاب  کنید</div>
                    <div className="test__container__background__slide">
                        {list.map(work=>{
                            return(   
                          <div key={work.id} className="test__container__background__slide__item" onClick={()=>handleSlider(work.id)}>
                            <p className={ work.active ? 'test__container__background__slide__item_yellow':''}>{work.title}</p>
                        </div>  
                        )})}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
