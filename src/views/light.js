import React from 'react'

const Light = ({ x, y, active, onClick }) => {
  const color = active ? '#e2e2e2' : '#4a5a93'

  return (
    <g key={x} className='cell'>
      <rect
        x={x + 0.25}
        y={y + 0.25}
        onClick={onClick}
        fill={color}
        width="0.75"
        height="0.75"
        rx="0.1"
        ry="0.1"
        filter="url(#dropshadow)" />
    </g>
  )
}

export default Light