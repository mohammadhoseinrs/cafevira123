import React from 'react';
import {Link} from 'react-router-dom'
import './Register.css'
import { useState } from 'react';
import Modal from '../../components/navbar/Modal';
import { Formik , Form } from 'formik';
import * as yup from 'yup' 
import AnimatedPage from '../../Animated'
import Formikcontrol from '../../validation/Formikcontrol';

export default function Register() {
    const[showmodal,setshowmodal]=useState(false)

    const radioData=[
      {key:'MEN',value:'men'},
      {key:'WOMEN' , value:'women'},
    ]
    const initialValues={
      Firstname:'',
      phoneNumber:'',
      Email:'',
      Password:'',
    }
    const validationSchema=yup.object({
      Firstname:yup.string().required('لطفا نام کاربری خود را وارد کنید'),
      Email:yup.string().email('ایمیل نامعتبر').required('لطفا ایمیل خود را وارد کنید'),
      Password:yup.string().min(5).required('لطفا رمزعبور خود را وارد کنید'),
      phoneNumber:yup.string().required('لطفا شماره تلفن خود را وارد کنید'),

    })
    const onSubmit=values=>{
      console.log(values);
    }
  return (
      <AnimatedPage>
       <div className="register">
       </div>
       <div className="register__container">
           <div className="register__container__inside">
             <div className="register__container__inside__inside">
               <p className='register__container__inside__inside__title'>
               ساخت حساب کاربری
               </p>
               <p className="register__container__inside__inside__subtitle">
               خوشحالیم قراره به جمع ما بپیوندی
               </p>
               <div className="register__container__inside__inside__register__box">
                 <div className="register__container__inside__inside__register__box">
                   <p>قبلا ثبت ‌نام کرده‌اید؟</p>
                   <div className="register__container__inside__inside__register__box_siginin">
                     وارد شوید                       
                   </div>
                 </div>
               </div>
               <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                  {
          formik=>{
            
            return(
      <div className='formik-div'>  
      <Form action="" className="register-form">
          <Formikcontrol control='input' name='Firstname'  placeholder='نام کاربری' type='text' autoComplete='off'  />
          <Formikcontrol control='input' name='phoneNumber' placeholder='شماره موبایل'  type='text' autoComplete='off' />
          <Formikcontrol control='input' name='Email' type='text' placeholder='ایمیل' autoComplete='off'  />
          <Formikcontrol control='input' name='Password' type='password' placeholder='رمز عبور'  autoComplete='off' />
          <button type='submit'
          disabled={!formik.isValid}
          >
            عضویت
          </button> 
      </Form>
      </div>   
            )
              }
                }
              </Formik>
             </div>
           </div>
         </div>
      </AnimatedPage>
  );
}
