import React from 'react'
import { changeMode, reset } from '../actions/game'
import withSend from 'microcosm/addons/with-send'

export default withSend(function Finish({ mode, send }) {
  return (
    <div className="modal fade-in-fast">
      <div className="modal-card splat">
        <h4 className="modal-dialog">
          <strong>You win! 🤓</strong>
          <br />
          {mode === 'EASY' ? "Wanna try 'Not Easy' mode? 😏" : ''}
        </h4>
        <div className="modal-ctrls">
          {mode === 'EASY'
            ? <span>
                <button
                  className="modal-btn cta"
                  onClick={() => send(changeMode, '!EASY')}
                >
                  Let's do it!
                </button>
                <button className="modal-btn" onClick={() => send(reset)}>
                  I'll stick to easy.
                </button>
              </span>
            : <button className="modal-btn cta" onClick={() => send(reset)}>
                Play again because you win at life!
              </button>}
        </div>
      </div>
    </div>
  )
})
