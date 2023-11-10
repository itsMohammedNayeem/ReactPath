import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Button from '@mui/material/Button'

export const Actions = () => {
  return (
    <div className='flex !flex-col items-center justify-center !p-1 align-middle'>
      <Button
        variant='contained'
        onClick={() => console.log('🚀 ~ file: Actions.jsx:17 ~ Actions ~ ArrowForwardIosIcon clicked')}>
        <ArrowForwardIosIcon className='fill-red-600' />
      </Button>
      <Button
        variant='contained'
        onClick={() => console.log('🚀 ~ file: Actions.jsx:17 ~ Actions ~ ArrowBackIosNewIcon clicked')}>
        <ArrowBackIosNewIcon className='fill-red-600' />
      </Button>
    </div>
  )
}
