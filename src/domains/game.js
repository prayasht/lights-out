import { flick } from '../actions/lights'

const Game = {
  getInitialState() {
    return {
      moves: 0,
      best: 0
    }
  },

  updateStats(state) {
    let newState = state.moves + 1
    return {...state, best: newState, moves: newState }
  },

  register() {
    return {
      [flick]: this.updateStats
    }
  }
}

export default Game