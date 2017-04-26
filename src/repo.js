import Microcosm from 'microcosm'
import Lights from './domains/lights'
import Game from './domains/game'

export default class Repo extends Microcosm {
  setup() {
    this.addDomain('game', Game)
    this.addDomain('lights', Lights)
  }
}
