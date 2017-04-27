import React from 'react'
import { reset } from '../actions/game'
import resetButton from '../../public/images/restart.svg'

const Stats = ({ moves }) => {
  return (
    <div className='stats'>
      <h4 className='stat moves'>Moves: {moves}</h4>
      <img className='restart' src={resetButton} alt='restart' onClick={reset} />
    </div>
  )
}

export default Stats