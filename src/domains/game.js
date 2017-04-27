import { flick, reset, changeMode } from '../actions/game'
import { createRandomMatrix, verifyCompletion, computeNewMatrix } from '../helpers'

const Game = {
  getInitialState() {
    console.info('Init.')
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      mode: 'EASY',
      moves: 0
    }
  },

  compute(state, { y, x }) {
    const computedMatrix = computeNewMatrix(state.lights, { y, x })
    // computedMat.map(x => console.info('row:', x.toString()))
    // console.info('Clicked: x:', x, 'y:', y))

    return {
      ...state,
      hasWon: verifyCompletion(computedMatrix),
      lights: computedMatrix,
      moves: state.moves + 1
    }
  },

  resetGame() {
    console.info('Reset game.')
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      mode: 'EASY',
      moves: 0
    }
  },

  switchMode(state, mode) {
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      mode: mode,
      moves: 0
    }
  },

  register() {
    return {
      [flick]       : this.compute,
      [reset]       : this.resetGame,
      [changeMode]  : this.switchMode
    }
  }
}

export default Game