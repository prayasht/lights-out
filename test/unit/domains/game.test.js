import React from 'react'
import Microcosm from 'microcosm'
import { shallow } from 'enzyme'
import Game from '../../../src/domains/game'
import Main from '../../../src/presenters/main'
import { flick, reset, changeMode } from '../../../src/actions/game'

describe('Initial State', () => {

  it('should initialize to a state where the user has not won by default', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    
    const { game } = repo.state
    expect(game.hasWon).toBeFalsy()
  })

  it('should initialize to 0 moves', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    
    const { game } = repo.state
    expect(game.moves).toEqual(0)
  })

  it('should return some random matrix of lights', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    
    const { game } = repo.state
    expect(game.lights.length).toEqual(5)
  })

})

describe('Action Handlers', () => {
  it('should increment the count of moves on each flick', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    repo.push(flick, { y: 2, x: 1 })

    const { game } = repo.state
    expect(game.moves).toEqual(1)
  })

  it('should compute a valid matrix when toggled', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    repo.push(flick, { y: 3, x: 3 })

    const { game } = repo.state
    expect(game.lights.length).toEqual(5)
  })

  it('should change difficulty mode to NOT_EASY', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    repo.push(changeMode, '!EASY')

    const { game } = repo.state
    expect(game.mode).toEqual('!EASY')
  })

  it('should change difficulty mode to EASY', () => {
    let repo = new Microcosm()
    repo.addDomain('game', Game)
    repo.push(changeMode, 'EASY')

    const { game } = repo.state
    expect(game.mode).toEqual('EASY')
  })

  // it('should change background when switching difficult modes', () => {
  //   let repo = new Microcosm()
  //   repo.addDomain('game', Game)
  //   repo.push(changeMode, 'EASY')

  //   const { game } = repo.state
  //   expect(
  //     shallow(<Main />).find('#container').at(0).hasClass('bg-red')
  //   ).toBeTruthy()
  // })
})