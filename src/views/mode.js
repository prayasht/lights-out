import React from 'react'
import { changeMode } from '../actions/game'
import withSend from 'microcosm/addons/with-send'

export default withSend(function Mode({ mode, send }) {
  return (
    <div className='mode-switcher center'>
      <h4 className={'mode ' + (mode === 'EASY' ? 'active' : '')} onClick={() => send(changeMode, 'EASY')}>Easy</h4>
      <h4 className={'mode ' + (mode === '!EASY' ? 'active' : '')} onClick={() => send(changeMode, '!EASY')}>!Easy</h4>
    </div>
  )
})