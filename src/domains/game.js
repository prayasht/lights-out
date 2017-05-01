import { changeMode, flick, info, reset, settings } from '../actions/game'
import { createRandomMatrix, verifyCompletion, computeNewMatrix } from '../helpers'

const Game = {
  getInitialState() {
    console.info('Init.')
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      mode: 'EASY',
      moves: 0,
      showInfo: false,
      showSettings: false,
    }
  },

  compute(state, { y, x }) {
    const computedMatrix = computeNewMatrix(state.lights, { y, x })
    // computedMat.map(x => console.info('row:', x.toString()))
    console.info('Clicked: x:', x, 'y:', y)

    return {
      ...state,
      hasWon: verifyCompletion(computedMatrix),
      lights: computedMatrix,
      moves: state.moves + 1
    }
  },

  // TODO: Red for hard, blue for easy!
  resetGame(state) {
    console.info('Reset game.')
    return {
      ...state,
      hasWon: false,
      lights: createRandomMatrix(5, state.mode),
      moves: 0
    }
  },

  showSettings(state) {
    console.info('Toggle settings.')
    return {
      ...state,
      showInfo: false,
      showSettings: !state.showSettings
    }
  },

  showInfo(state) {
    console.info('Toggle info.')
    return {
      ...state,
      showInfo: !state.showInfo,
      showSettings: false
    }
  },

  switchMode(state, mode) {
    console.info('Switch mode to:', mode)
    return {
      ...state,
      hasWon: false,
      lights: createRandomMatrix(5, mode),
      mode: mode,
      moves: 0
    }
  },

  register() {
    return {
      [changeMode]  : this.switchMode,
      [flick]       : this.compute,
      [info]        : this.showInfo,
      [reset]       : this.resetGame,
      [settings]    : this.showSettings
    }
  }
}

export default Game