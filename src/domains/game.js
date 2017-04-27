import { flick, reset } from '../actions/game'
import { createRandomMatrix, verifyCompletion, computeNewMatrix } from '../helpers'

const Game = {
  getInitialState() {
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      moves: 0
    }
  },

  compute(state, { y, x }) {
    const computedMatrix = computeNewMatrix(state.lights, { y, x })
    // computedMat.map(x => console.info('row:', x.toString()))
    // console.info('Clicked: x:', x, 'y:', y))

    return {
      hasWon: verifyCompletion(computedMatrix),
      lights: computedMatrix,
      moves: state.moves + 1
    }
  },

  resetGame() {
    return {
      hasWon: false,
      lights: createRandomMatrix(5),
      moves: 0
    }
  },

  register() {
    return {
      [flick] : this.compute,
      [reset] : this.resetGame
    }
  }
}

export default Game