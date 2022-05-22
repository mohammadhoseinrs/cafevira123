import React from 'react'
import Categoryitem from '../Categoryitem'
import './CategoryRow.css'
export default function CategoryRow() {
  return (
    <section className='CategoryRow'>
        <div className="CategoryRow__container">
            <div className="CategoryRow__top">
                <p>بهترین فروش</p>
                <button className='CategoryRow__top__btn'>
                    مشاهده همه
                </button>
            </div>
            <div className="CategoryRow__row">
            <Categoryitem />
            <Categoryitem />
            <Categoryitem />
            <Categoryitem />

            </div>
        </div>
    </section>
  )
}
