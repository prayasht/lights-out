import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Board from '../views/board'
import Mode from '../views/mode'
import Stats from '../views/stats'

class Main extends Presenter {

  setup(repo) {
    // repo.push(getMain)
  }

  getModel() {
    return {
      mode: state => state.game.mode,
      hasWon: state => state.game.hasWon,
      lights: state => state.game.lights,
      moves: state => state.game.moves
    }
  }

  render() {
    const { hasWon, lights, mode, moves } = this.model
    console.log(hasWon)
    return (
      <div>
        <hr />
        <Board lights={lights} />
        <hr />
        <Mode mode={mode} />
        <hr />
        <Stats moves={moves} />
        {/*<h3>hasWon: {hasWon}</h3>*/}
        
      </div>
    )
  }
}

export default Main