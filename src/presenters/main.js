import React from 'react'
import Presenter from 'microcosm/addons/presenter'
import Board from '../views/board'
import Mode from '../views/mode'
import Stats from '../views/stats'

class Main extends Presenter {

  constructor() {
    super()
    this.state = {
      width: Math.min(window.innerWidth / 2, 340),
      height: Math.min(window.innerWidth / 2, 340)
    }
  }

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

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      width: Math.min(window.innerWidth / 2, 340),
      height: Math.min(window.innerWidth / 2, 340)
    })
    console.log(this.state)
  }

  render() {
    const { hasWon, lights, mode, moves } = this.model
    const { width, height } = this.state

    return (
      <div id='container' className={'fade-in ' + (mode === 'EASY' ? 'bg-blue' : 'bg-red')}>
        <div id='wrapper'>
          <h1 className='title center'>Lights Out!</h1>
            <div id='main'>
            <hr />
            
            <Board lights={lights} width={width} height={height} />
            <hr />
            
            <Mode mode={mode} />
            <hr />

            <Stats moves={moves} />

            {hasWon ?
              <div className='modal fade-in-fast'>
                <div className='modal-card splat'>
                  <h4 className='modal-dialog'><strong>You win!</strong><br/>Wanna try 'Not Easy' mode? 😏</h4>
                  <div className='modal-ctrls'>
                    <button className='modal-btn cta'>Let's do it!</button>
                    <button className='modal-btn'>I'll stick to easy.</button>
                  </div>
                </div>
              </div>
            :
              ''
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default Main