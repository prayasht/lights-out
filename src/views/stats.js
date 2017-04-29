import React from 'react'
import { reset } from '../actions/game'
import withSend from 'microcosm/addons/with-send'
import resetButton from '../../public/images/restart.svg'

export default withSend(function Stats({ moves, send }) {
  return (
    <div className='stats'>
      <h4 className='stat'>Moves: {moves}</h4>
      <img className='restart' src={resetButton} alt='restart' onClick={() => send(reset)} />
    </div>
  )
})