import { useNavigate } from 'react-router-dom'

import ChecklistIcon from '@mui/icons-material/Checklist'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import { Button, Typography } from '@mui/material'

import './index.css'

export const Home = () => {
  const navigate = useNavigate()

  const handleListInterchangeClick = () => {
    navigate('/ListInterchange')
  }
  const handleInputValidateClick = () => {
    navigate('/InputValidate')
  }

  return (
    <div className='App flexC'>
      <div className='top'>
        <Typography variant='h3'>List of Projects</Typography>
      </div>
      <div className='flexC'>
        <Button variant='contained' onClick={handleListInterchangeClick}>
          <ChecklistIcon className='fill-primary' />
        </Button>
      </div>
      <div className='flexC'>
        <Button variant='contained' onClick={handleInputValidateClick}>
          <KeyboardIcon className='fill-primary' />
        </Button>
      </div>
    </div>
  )
}
