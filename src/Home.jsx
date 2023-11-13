import { useNavigate } from 'react-router-dom'

import ChecklistIcon from '@mui/icons-material/Checklist'
import { Button, Typography } from '@mui/material'

import './index.css'

export const Home = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/ListInterchange')
  }

  return (
    <div className='App flexC'>
      <div className='top'>
        <Typography variant='h3'>List of Projects</Typography>
      </div>
      <div className='flexC'>
        <Button variant='contained' onClick={handleButtonClick}>
          <ChecklistIcon className='fill-primary' />
        </Button>
      </div>
    </div>
  )
}
