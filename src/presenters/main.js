import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Board from '../views/board'
import Stats from '../views/stats'

class Main extends Presenter {

  setup(repo) {
    // repo.push(getMain)
  }

  getModel() {
    return {
      hasWon: state => state.game.hasWon,
      lights: state => state.game.lights,
      moves: state => state.game.moves
    }
  }

  render() {
    const { hasWon, lights, moves } = this.model
    console.log('hasWon:', hasWon)
    return (
      <div>
        <hr />
        <Board lights={lights} />
        <hr />
        <Stats moves={moves} />
        <p>{hasWon}</p>
      </div>
    )
  }
}

export default Main