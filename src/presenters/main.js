import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import { calculateBoardDimensions } from '../helpers'

import Board from '../views/board'
import Finish from '../views/finish'
import Info from '../views/info'
import Menu from '../views/menu'
import Mode from '../views/mode'

class Main extends Presenter {

  constructor() {
    super()
    const dimensions = calculateBoardDimensions()
    this.state = {
      width: dimensions.width,
      height: dimensions.height
    }
  }

  setup(repo) {
    // ... prep work
    // repo.push(getMain)
  }

  getModel() {
    return {
      mode: state => state.game.mode,
      hasWon: state => state.game.hasWon,
      lights: state => state.game.lights,
      moves: state => state.game.moves,
      showInfo: state => state.game.showInfo,
      showSettings: state => state.game.showSettings
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const updatedDims = calculateBoardDimensions()
    this.setState({
      width: updatedDims.width,
      height: updatedDims.height
    })
  }

  render() {
    const { hasWon, lights, mode, moves, showInfo, showSettings } = this.model
    const { width, height } = this.state

    return (
      <div id='container' className={'fade-in ' + (mode === 'EASY' ? 'bg-blue' : 'bg-red')}>
        <div id='wrapper'>
          <h1 className='title center'>Lights Out!</h1>
            <div id='main'>
            <hr />
            
            <Board lights={lights} width={width} height={height} />
            <hr />

            <Menu moves={moves} activeMenuItem={{ showInfo, showSettings }}/>
            <hr />

            <Mode mode={mode} open={showSettings} />
            <Info open={showInfo} />

            { hasWon ? <Finish /> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default Main