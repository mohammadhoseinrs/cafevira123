import React from 'react'
import './Product.css'
import ProductTop from '../../components/product/producttop/ProductTop'
import ProductShow from '../../components/product/productShow/ProductShow'
import ProductText from '../../components/product/productText/ProductText'
import AnimatedPage from '../../Animated'
export default function Product() {
  return (
    <AnimatedPage>
    <section className='product'>
        <div className="product__container">
           <ProductTop />
           <ProductShow />
           <ProductText />
        </div>
    </section>
    </AnimatedPage>
  )
}
