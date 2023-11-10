import ChecklistIcon from '@mui/icons-material/Checklist'
import { Container, Button } from '@mui/material'

import ListInterchange from './ListInterchange'

export const Home = () => {
  return (
    <Container className='flex items-center justify-center p-2 align-middle'>
      <Button variant='contained' onClick={() => console.log('🚀 ~ file: Actions.jsx:17 ~ Actions ~ List clicked')}>
        <ChecklistIcon className='fill-red-600' />{' '}
      </Button>
      <ListInterchange />
    </Container>
  )
}
