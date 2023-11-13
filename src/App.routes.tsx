import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import ListInterchange from './ListInterchange'
import './index.css'

export enum RoutesEnum {
  'Home' = '/',
  'ListInterchange' = '/listinterchange'
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Home} element={<Home />} />
      <Route path={RoutesEnum.ListInterchange} element={<ListInterchange />} />
    </Routes>
  )
}

export default AppRoutes
