import React from 'react'
import Customer from '../components/Home/customer/Customer'
import Services from '../components/Home/service1/Services'
import Showcase from '../components/Home/showcase/Showcase'
import Familymember from '../components/Home/familymember/Familymember'
import Worksampletest from '../components/Home/WorkSample/Worksampletest'
import AnimatedPage from '../Animated'


export default function Home() {
  return (
      <>
      <AnimatedPage>
    <Showcase />
    <Worksampletest />
    <Customer />
    <Services />
    <Familymember />
    </AnimatedPage>
    </>
  )
}
