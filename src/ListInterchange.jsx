import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'

import { Actions } from './Actions'
import { items } from './Data'
import { ListComp } from './ListComp'
import { not, intersection } from './Utils'

const ListInterchange = () => {
  const navigate = useNavigate()

  const [leftItems, setLeftItems] = useState(items)
  const [rightItems, setRightItems] = useState([])
  const [checkedItems, setCheckedItems] = useState([])

  const leftCheckedItems = intersection(leftItems, checkedItems)
  const rightCheckedItems = intersection(rightItems, checkedItems)

  const handleGoBack = () => {
    navigate('/')
  }

  const handleToggle = item => {
    const currentIndex = checkedItems.indexOf(item)
    const mewCheckedItems = [...checkedItems]

    if (currentIndex === -1) {
      mewCheckedItems.push(item)
    } else {
      mewCheckedItems.splice(currentIndex, 1)
    }

    setCheckedItems(mewCheckedItems)
  }

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems))
    setLeftItems(not(leftItems, leftCheckedItems))
    setCheckedItems(not(checkedItems, leftCheckedItems))
  }

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems))
    setRightItems(not(rightItems, rightCheckedItems))
    setCheckedItems(not(checkedItems, rightCheckedItems))
  }

  return (
    <div className='App flexC font-mono'>
      <div className='App flexC font-mono'>
        <ListComp items={leftItems} handleToggle={handleToggle} />
        <Actions moveRight={moveRight} moveLeft={moveLeft} handleToggle={handleToggle} />
        <ListComp items={rightItems} handleToggle={handleToggle} />
      </div>
      <div className='bottom'>
        <Button variant='contained' onClick={handleGoBack}>
          <ArrowBackIcon />
        </Button>
      </div>
    </div>
  )
}

export default ListInterchange
