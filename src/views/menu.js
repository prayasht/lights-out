import React from 'react'
import { info, reset, settings } from '../actions/game'
import withSend from 'microcosm/addons/with-send'

export default withSend(function Menu({ moves, send }) {
  return (
    <div className='menu'>
      <h4 className='stat'>Moves: {moves}</h4>
      <i className="restart fa fa-undo" onClick={() => send(reset)}></i>
      <i className="restart fa fa-cog" onClick={() => send(settings)}></i>
      <i className="restart fa fa-info" onClick={() => send(info)}></i>
    </div>
  )
})