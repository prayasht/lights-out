import { update } from 'microcosm'
import { flick } from '../actions/lights'
import { createRandomMatrix } from '../utils'

const Lights = {
  getInitialState() {
    return createRandomMatrix(5)
  },

  toggle(lights, { x, y }) {
    return update(lights, [y, x], val => console.log(val), 0)
  },

  compute(lights, { y, x }) {
    let newState = lights.splice(0)
    newState[y][x] = !newState[y][x] | 0
    if (y !== 0)                        newState[y - 1][x] = !newState[y - 1][x] | 0
    if (y !== newState[x].length - 1)   newState[y + 1][x] = !newState[y + 1][x] | 0
    if (x !== 0)                        newState[y][x - 1] = !newState[y][x - 1] | 0
    if (x !== newState.length - 1)      newState[y][x + 1] = !newState[y][x + 1] | 0

    // newState.map(x => console.info('row:', x.toString()))
    // console.info('Clicked: x:', x, 'y:', y)

    return newState
  },

  register() {
    return {
      [flick]: this.compute
    }
  }
}

export default Lights