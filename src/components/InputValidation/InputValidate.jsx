import cx from 'classnames'
import React, { useState } from 'react'

import TextField from '@mui/material/TextField'

const InputValidate = () => {
  const [inputValue, setInputValue] = useState('')
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const [buttonPosition, setButtonPosition] = useState('center')

  const handleInputChange = e => {
    const value = e.target.value
    setInputValue(value)
    const isValid = value.length >= 5
    setIsSubmitDisabled(!isValid)
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('submitted')
  }

  const handleMouseEnter = () => {
    setButtonPosition(buttonPosition === 'left' ? 'right' : 'left')
  }

  return (
    <div className='App flexC'>
      <form className='flexC flexCol' onSubmit={handleSubmit}>
        <TextField
          id='outlined-basic'
          className='p-4'
          value={inputValue}
          placeholder='length > 5'
          label='Enter something'
          variant='outlined'
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className={cx('submit-button', { disabled: isSubmitDisabled }, buttonPosition)}
          disabled={isSubmitDisabled}
          onMouseEnter={handleMouseEnter}>
          submit
        </button>
      </form>
    </div>
  )
}

export default InputValidate
