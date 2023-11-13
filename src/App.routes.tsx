import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { InputValidate, ListInterchange } from '.'
import { Home } from './Home'
import './index.css'

export enum RoutesEnum {
  'Home' = '/',
  'ListInterchange' = '/listinterchange',
  'InputValidate' = '/inputvalidate'
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.Home} element={<Home />} />
      <Route path={RoutesEnum.ListInterchange} element={<ListInterchange />} />
      <Route path={RoutesEnum.InputValidate} element={<InputValidate />} />
    </Routes>
  )
}

export default AppRoutes
