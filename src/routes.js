import Home from "./pages/Home"
import Register from './pages/SignUp/Register'
import Shopping from './pages/Shopping/Shopping'
import Category from "./pages/Category/Category"
import Product from "./pages/Product/Product"
import Webdesign from "./pages/WebDesign/Webdesign"
import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing"
import Seo from "./pages/seo/Seo"
import Application from "./pages/application/Application"
import Game from "./pages/Game/Game"


let routes=[
    {path:'/',element:<Home />},
    {path:'/signup',element:<Register />},
    {path:'/web-design',element:<Webdesign />},
    {path:'/shopping',element:<Shopping />},
    {path:'/category',element:<Category />},
    {path:'/product',element:<Product />},
    {path:'/digitalmarketing',element:<DigitalMarketing />},
    {path:'/seo',element:<Seo />},
    {path:'/application',element:<Application />},
    {path:'/game', element:<Game />}


]

export default routes