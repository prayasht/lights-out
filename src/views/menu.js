import React from 'react'
import { info, reset, settings } from '../actions/game'
import withSend from 'microcosm/addons/with-send'

export default withSend(function Menu({ activeMenuItem, moves, send }) {
  const { showInfo, showSettings } = activeMenuItem
  return (
    <div className='menu'>
      <h4 className='stat'>Moves: {moves}</h4>
      <i className="restart fa fa-undo" onClick={() => send(reset)}></i>
      
      <span className='divider'>/</span>
      
      <i className={"restart fa fa-cog " + (showSettings ? 'active' : '')} onClick={() => send(settings)}></i>
      <i className={"restart fa fa-info "+ (showInfo ? 'active' : '')} onClick={() => send(info)}></i>
    </div>
  )
})