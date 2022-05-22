import React from 'react'
import AnimatedPage from '../../Animated'
import ShoppingAll from '../../components/Shopping/ShoppingAll/ShoppingAll'
import Shoppingbestweek from '../../components/Shopping/Shoppingbestweek/Shoppingbestweek'
import ShoppingCategory from '../../components/Shopping/Shoppingcategory/ShoppingCategory'
import ShoppingDownload from '../../components/Shopping/ShoppingDownload/ShoppingDownload'
import Shoppingfeaturedtheme from '../../components/Shopping/Shoppingfeaturedtheme/Shoppingfeaturedtheme'
import Shoppingfreeitem from '../../components/Shopping/Shoppingfreeitem/Shoppingfreeitem'
import ShoppingTheme from '../../components/Shopping/ShoppingTheme/ShoppingTheme'
import Shoppingtop from '../../components/Shopping/Shoppingtop/Shoppingtop'
import './Shopping.css'
export default function Shooping() {
  return (
    <AnimatedPage>
    <div className='shooping'>
      <div className="shopping__container">
        <Shoppingtop />
        <ShoppingCategory />
        <ShoppingTheme />
        <Shoppingfeaturedtheme />
        <ShoppingAll />
        <Shoppingbestweek />
        <ShoppingDownload />
        <Shoppingfreeitem />
      </div>
    </div>
    </AnimatedPage>
  )
}
