import React from 'react'
import Row from './row'

export default function Board({ lights, height, width, send }) {
  const scaleX = width / lights[0].length
  const scaleY = height / lights.length
  const transform = `scale(${scaleX}, ${scaleY})`

  return (
    <svg className='board' width={width} height={height}>
      <defs>
			
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10"/> 
          <feOffset dx="4" dy="40" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>

      </defs>
      <g
        transform={transform}
        stroke="#4a5a93"
        strokeWidth={0.25 / scaleX}
        strokeOpacity="0.5" >
        {lights.map((row, y) => <Row key={y} cells={row} y={y} />)}
      </g>
    </svg>
  )
}

Board.defaultProps = {
  lights: [],
  height: Math.min(window.innerWidth / 2, 340),
  width: Math.min(window.innerWidth / 2, 340)
}