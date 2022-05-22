import React from 'react'
import AnimatedPage from '../../Animated'
import CategoryRow from '../../components/category/categoryrow/CategoryRow'
import Categorytop from '../../components/category/Categorytop/Categorytop'
import './Category.css'


export default function Category() {
  return (
    <AnimatedPage>
        <Categorytop />
        <CategoryRow />
    </AnimatedPage>
  )
}
