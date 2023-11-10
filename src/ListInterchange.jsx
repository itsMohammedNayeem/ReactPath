import React from 'react'

import Container from '@mui/material/Container'

import { Actions } from './Actions'
import { ListComp } from './ListComp'

const ListInterchange = () => {
  return (
    <Container className='flex h-screen items-center justify-center align-middle font-mono'>
      <ListComp />
      <Actions />
      <ListComp />
    </Container>
  )
}

export default ListInterchange
