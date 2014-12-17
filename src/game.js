var Phaser = require('phaser');

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
  game.load.image('flyer', 'images/logo.png');
}

var image;

function create() {
  game.renderer.autoResize = true;
  game.physics.startSystem(Phaser.Physics.ARCADE);
  image = game.add.sprite(0, 0, 'flyer');
  game.physics.enable(image, Phaser.Physics.ARCADE);
  image.body.velocity.setTo(200,200);
  image.body.collideWorldBounds = true;
  image.body.bounce.set(1);
}

function update () {
}

function render () {
  // game.debug.spriteInfo(image,32,32);
}