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
      lights: state => state.lights,
      moves: state => state.game.moves,
      best: state => state.game.best
    }
  }

  render() {
    const { lights, moves, best } = this.model
    
    return (
      <div>
        <hr />
        <Board lights={lights} />
        <hr />
        <Stats moves={moves} best={best} />
      </div>
    )
  }
}

export default Main