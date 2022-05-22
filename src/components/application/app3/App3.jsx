import React from 'react'
import './Appsection3.css'
export default function App3({color ,number ,text}) {
  return (
    <div className='app3' style={{backgroundColor:color}}>
        <h2>{number}</h2>
        <p>{text}</p>
    </div>
  )
}
