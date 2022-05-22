import React from 'react'
import Game1 from '../../components/game/Game1/Game1'
import Game2 from '../../components/game/Game2/Game2'
import Game3 from '../../components/game/Game3/Game3'
import Game4 from '../../components/game/game4/Game4'
import Gamefooter from '../../components/game/Gamefooter/Gamefooter'
import Gametop from '../../components/game/gametop/Gametop'

export default function Game() {
  return (
    <div>
        <Gametop />
        <Game1 />
        <Game2 />
        <Game3 />
        <Game4 />
        <Gamefooter />
    </div>
  )
}
