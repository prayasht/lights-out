import React from 'react'

const Info = ({ open }) => {
  return (
    <div className={'info center ' + (open ? 'reveal' : 'collapse')}>
      <article>
        <a
          href="https://en.wikipedia.org/wiki/Lights_Out_(game)"
          target="_blank"
          className="link"
        >
          Lights Out
        </a>{' '}
        is an electronic game released by Tiger Electronics in 1995. The game
        consists of a 5 by 5 grid of lights. When the game starts, a random
        number or a stored pattern of these lights is switched on (white).
        Pressing any of the lights will toggle it and the adjacent lights. The
        goal of the puzzle is to switch all the lights off, preferably in as few
        button presses as possible.
      </article>
      <article>
        Made by Prayash Thapa (
        <a href="http://prayash.io" target="_blank" className="link">
          prayash.io
        </a>
        ).
      </article>
    </div>
  )
}

export default Info
