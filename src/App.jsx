import React, { Fragment } from 'react'
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <Fragment>
      <div>App</div>
      <Outlet/>
    </Fragment>
  )
}
