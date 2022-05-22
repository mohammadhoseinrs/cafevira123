import React from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import './Modal.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal({closemodal}) {

    const [firstname , setfirstname]=useState('')
    const [password , setpassword ]=useState('')
    const [userdata,setuserdata]=useState([])

    const Submit2handler= async (event)=>{
        event.preventDefault()
        await fetch('https://sabzlearn2-default-rtdb.firebaseio.com/users.json').then(response=>response.json()).then(data=>setuserdata(Object.entries(data)));
    }
  return <div>
          <div className="modal" style={{zIndex:'999'}} onClick={()=>closemodal(false)}  >
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
              <div className="modal-header">
                  <h2>ورود</h2>
                  <AiOutlineClose className='icon-modal' onClick={()=>closemodal(false)} />
              </div>
              <form className="modal-footer" onSubmit={Submit2handler}> 
                  <input type="text" dir='auto' placeholder='نام کاربری' onChange={(event)=>setfirstname(event.target.value)}  />
                  <input type="password" dir='auto' placeholder='رمز عبور' onChange={(event)=>setpassword(event.target.value)} />
                  <div className='far'>  
                      <input type="checkbox"  />
                      <label htmlFor="">مرا به خاطر داشته باش</label> 
                  </div>
                  <a href="/1" className='ramz'>رمز عبور را فراموش کرده اید؟</a>
                  <button className='btn' type='submit'>ورود</button>
                  <p> هنوز عضو نشده اید؟<a href='/signup'> عضویت در سایت</a></p>
              </form>
          </div>
      </div>
      
       


      
      
  </div>;
}
