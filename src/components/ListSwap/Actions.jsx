import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'

const Actions = ({ moveRight, moveLeft }) => {
  return (
    <div className='actions flexC'>
      <Button variant='contained' onClick={moveRight}>
        <ArrowForwardIosIcon />
      </Button>
      <Button variant='contained' onClick={moveLeft}>
        <ArrowBackIosNewIcon />
      </Button>
    </div>
  )
}

export default Actions
