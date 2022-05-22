import React from 'react'
import Appsection1 from '../../components/application/app1/Appsection1'
import Appsection2 from '../../components/application/app2/Appsection2'
import Appsection3 from '../../components/application/app3/Appsection3'
import Appsection4 from '../../components/application/app4/Appsection4'
import Appsection5 from '../../components/application/app5/Appsection5'
import Apptop from '../../components/application/apptop/Apptop'
export default function Application() {
  return (
    <div>
        <Apptop />
        <Appsection1 />
        <Appsection2 />
        <Appsection3 />
        <Appsection4 />
        <Appsection5 />
    </div>
  )
}
