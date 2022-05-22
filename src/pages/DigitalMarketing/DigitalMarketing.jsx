import React from 'react'
import AnimatedPage from '../../Animated'
import Dgemail from '../../components/DigitalMarketing/dgemail/Dgemail'
import DigitalMarketingsection from '../../components/DigitalMarketing/DigitalMarketingsection/DigitalMarketingsection'
import DigitalMarketingsection2 from '../../components/DigitalMarketing/DigitalMarketingsection2/DigitalMarketingsection2'
import DigitalMarketingSlider from '../../components/DigitalMarketing/DigitalMarketingSlider/DigitalMarketingSlider'
import DigitalMarketingSubSlider from '../../components/DigitalMarketing/DigitalMarketingSubSlider/DigitalMarketingSubSlider'
import DigitalMarketingtext1 from '../../components/DigitalMarketing/DigitalMarketingtext1/DigitalMarketingtext1'
import DigitalMarketingTop from '../../components/DigitalMarketing/DigitalMarketingTop/DigitalMarketingTop'

export default function DigitalMarketing() {
  return (
    <AnimatedPage>
      <DigitalMarketingTop />
      <DigitalMarketingtext1 />
      <DigitalMarketingSlider />
      <DigitalMarketingSubSlider />
      <DigitalMarketingsection />
      <DigitalMarketingsection2 />
      <Dgemail />
    </AnimatedPage>
  )
}
