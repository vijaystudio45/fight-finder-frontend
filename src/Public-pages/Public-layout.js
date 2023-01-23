import React from 'react'
import Public_footer from './Public-footer'
import Public_header from './Public-header'
import { Outlet } from 'react-router-dom'

function Public_layout() {
  return (
    <div className="main_appLayout">
    <div className="main_navbar_header">
      <Public_header />
    </div>
    <div className="main_footer">
      <Outlet />
      <Public_footer />
    </div>
  </div>
  )
}

export default Public_layout