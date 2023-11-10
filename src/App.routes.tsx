import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'

export enum RoutesEnum {
  'Home' = '/'
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Home} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
