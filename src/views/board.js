import React from 'react'
import Row from './row'

export default function Board({ lights, height, width, send }) {
  const scaleX = width / lights[0].length
  const scaleY = height / lights.length
  const transform = `scale(${scaleX}, ${scaleY})`
  const viewBox = [0, 0, width, height].join(' ')

  return (
    <svg className='board' width={width} height={height}>
      <defs>
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
          <feFlood floodColor="rgb(0,186,255)" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored"/>
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