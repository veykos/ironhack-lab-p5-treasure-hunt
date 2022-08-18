const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
}

function keyPressed() {
  if (keyCode === 39) {
      //move the player
      game.player.moveRight();
  }
  if (keyCode === 38) {
      //move the player
      game.player.moveUp();
  }
  if (keyCode === 40) {
      //move the player
      game.player.moveDown();
  }
  if (keyCode === 37) {
      //move the player
      game.player.moveLeft();
  }


}