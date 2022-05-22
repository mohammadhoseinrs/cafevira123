import React from 'react'
import SeoAcademy from '../../components/seo/seoAcademy/SeoAcademy'
import SeoGoogle from '../../components/seo/seoGoogle/SeoGoogle'
import SeoSample from '../../components/seo/seosample/SeoSample'
import Seotop from '../../components/seo/seoTop/Seotop'
import AnimatedPage from './../../Animated'
import './seo.css'
export default function Seo() {
  return (
    <AnimatedPage>
      <section className='seo'>
        <Seotop />
        <SeoGoogle />
        <SeoSample />
        <SeoAcademy />
      </section>
    </AnimatedPage>
  )
}
