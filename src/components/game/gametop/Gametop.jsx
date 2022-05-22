import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Gametop.css'
import FramerMotion from "../../../FramerMotion";
export default function Gametop() {
    
  return (
    
        <section className="gametop__container">
        <section className="gametop">
            <div className="gametop__title">
            لورم ایپسوم متن ساختگی
            </div>
            <h2 className="gametop__subtitle">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
            </h2>
            <p className="gametop__subtitle2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
            </p>
            <FramerMotion>
            <div className="gametop__content">
                <div className="gametop__content__item">
                    <h5>
                    لورم ایپسوم متن ساختگی
                    </h5>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  می باشد
                    </p>
                </div>
                <div className="gametop__content__item">
                    <h5>
                    لورم ایپسوم متن ساختگی
                    </h5>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  می باشد
                    </p>
                </div>
                <div className="gametop__content__item">
                    <h5>
                    لورم ایپسوم متن ساختگی
                    </h5>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  می باشد
                    </p>
                </div>
            </div>
            </FramerMotion>
            <div className="gametop__btn__container">
                <button className="gametop__btn">
            لورم ایپسوم متن
            </button>
            </div>
        </section>
        </section>
        
  )
}
