import React from 'react'
import withSend from 'microcosm/addons/with-send'
import { flick } from '../actions/game'
import Light from './light'

export default withSend(function Row({ cells, y, send }) {
  return (
    <g key={y} className="row">
      {cells.map((active, x) =>
        <Light
          key={x}
          x={x}
          y={y}
          active={active}
          onClick={() => send(flick, { y, x })}
        />
      )}
    </g>
  )
})
