import React from 'react'
import { changeMode } from '../actions/game'
import withSend from 'microcosm/addons/with-send'

export default withSend(function Mode({ mode, open, send }) {
  return (
    <div className={'mode-switcher center ' + (open ? 'reveal' : 'collapse')}>
      <h4
        className={'mode ' + (mode === 'EASY' ? 'active' : '')}
        onClick={() => send(changeMode, 'EASY')}
      >
        Easy
      </h4>
      <h4
        className={'mode ' + (mode === '!EASY' ? 'active' : '')}
        onClick={() => send(changeMode, '!EASY')}
      >
        Not Easy
      </h4>
    </div>
  )
})
