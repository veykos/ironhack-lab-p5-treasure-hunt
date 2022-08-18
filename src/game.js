class Game {
  constructor() {
    this.player = new Player(0, 0)
    this.treasure = new Treasure()
    this.treasure.setRandomPosition();
    this.points = 0
  }

  preload() {
    this.player.image_down = loadImage("../assets/character-down.png")
    this.player.image_up = loadImage("../assets/character-up.png")
    this.player.image_left = loadImage("../assets/character-left.png")
    this.player.image_right = loadImage("../assets/character-right.png")
    this.player.image = loadImage("../assets/character-down.png")
    this.treasure.image = loadImage("../assets/treasure.png")
  }
  checkForWin() {
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row){
      this.treasure.setRandomPosition();
      this.points += 1;
    }
  }
  displayPoints() {
    document.querySelector('span').innerHTML = this.points;

  }

  drawGrid() {
    clear()
    stroke('black')
    for (var x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (var y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        strokeWeight(1)
        line(x, 0, x, WIDTH);
        line(0, y, HEIGHT, y);

        }
    }
    this.player.draw()
    this.treasure.drawTreasure();
    this.checkForWin();
    this.displayPoints();
  }
}

class Player {
  constructor(col,row) {
    this.col = col
    this.row = row
    this.x = this.col * SQUARE_SIDE;
    this.y = this.row * SQUARE_SIDE;
    this.image_down;
    this.image_up;
    this.image_left;
    this.image_right;
    this.image;
  }

  draw() {
    image(this.image ,this.x ,this.y, SQUARE_SIDE , SQUARE_SIDE)
  }

  moveUp() {
    if (!(this.row === 0)){
      this.row -= 1
      this.y = this.row * SQUARE_SIDE;
      this.image = this.image_up;
    }
  }
  moveLeft() {
    if (!(this.col === 0)) {
      this.col -= 1
      this.x = this.col * SQUARE_SIDE;
      this.image = this.image_left;
    }
  }
  moveRight() {
    if (!(this.col === WIDTH/SQUARE_SIDE - 1)) {
      this.col += 1
      this.x = this.col * SQUARE_SIDE;
      this.image = this.image_right;

    }
  }
  moveDown() {
    if (!(this.row === HEIGHT/SQUARE_SIDE-1)) {

      this.row += 1
      this.y = this.row * SQUARE_SIDE;
      this.image = this.image_down;
    }
  }
}

class Treasure {
  constructor() {
    this.col
    this.row
    this.x = this.col * SQUARE_SIDE;
    this.y = this.row * SQUARE_SIDE;
    this.image;
  }
  setRandomPosition() {
    this.col = Math.floor((Math.random(WIDTH/SQUARE_SIDE)*10))
    this.row = Math.floor((Math.random(WIDTH/SQUARE_SIDE)*10))
    this.x = this.col * SQUARE_SIDE;
    this.y = this.row * SQUARE_SIDE;
  }
  drawTreasure() {
    image(this.image,this.x,this.y,SQUARE_SIDE,SQUARE_SIDE)
  }

}