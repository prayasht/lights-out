import React from 'react'

const Stats = ({ moves, best }) => {

  console.log('Stats:', moves)
  return (
    <div className='stats center'>
      <h4 className='stat moves'>Moves: {moves}</h4>
      <h4 className='stat best'>Best: {best}</h4>
    </div>
  )
}

export default Stats