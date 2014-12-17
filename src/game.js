var Phaser = require('phaser');

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
  game.load.image('flyer', 'images/logo.png');
}

var image;

function create() {
  game.stage.backgroundColor = '#212121';
  game.physics.startSystem(Phaser.Physics.ARCADE);
  image = game.add.sprite(0, 0, 'flyer');
  game.physics.enable(image, Phaser.Physics.ARCADE);
  image.body.velocity.setTo(200,200);
  image.body.collideWorldBounds = true;
  image.body.bounce.set(1);

  window.addEventListener('resize', function(){
    game.renderer.resize(window.innerWidth, window.innerHeight);
  });
}

function update () {
}

function render () {
  // game.debug.spriteInfo(image,32,32);
}