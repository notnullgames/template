// Require PIXI module
var PIXI = require('PIXI');

// scale to window, maintain
PIXI.BaseTexture.SCALE_MODE.DEFAULT = PIXI.BaseTexture.SCALE_MODE.NEAREST;

// You can use either WebGLRenderer or CanvasRenderer
var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);

var stage = new PIXI.Stage();
var bunnyTexture = PIXI.Texture.fromImage("images/bunny.png");
var bunny = new PIXI.Sprite(bunnyTexture);

bunny.position.x = 400;
bunny.position.y = 300;
bunny.scale.x = 2;
bunny.scale.y = 2;

stage.addChild(bunny);

requestAnimationFrame(animate);

function animate() {
    bunny.rotation += 0.01;
    renderer.render(stage);
    requestAnimationFrame(animate);
}
