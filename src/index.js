import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import './index.css'

export const preload = () => {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
}

export const create = () => {
  game.state.add('Boot', BootState, false)
  game.state.add('Splash', SplashState, false)
  game.state.add('Game', GameState, false)
  game.state.start('Boot')
}

window.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload, create })
