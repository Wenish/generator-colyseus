import { EntityMap } from 'colyseus'
import { Player } from '../../models/player'

export class StateHandler {
  players: EntityMap<Player>
  counter: number

  constructor () {
    this.players = {}
    this.counter = 0
  }

  addPlayer (client) {
    this.players[ client.sessionId ] = new Player(
      client.sessionId, //id
      5, //x
      10, //z
    );
    console.log('added player')
  }


  removePlayer (client) {
    delete this.players[ client.sessionId ];
    console.log('removed player')
  }

  increaseCounter () {
    this.counter++
  }
}
