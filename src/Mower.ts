import {MowerProperties} from "./MowerProperties"
const DIRECTIONS = ['N', 'E', 'S', 'W'];

export class Mower {
  x: number;
  y: number;
  direction: string;
  xBoundary: number;
  yBoundary: number;
  constructor(private mowerProperties :MowerProperties) {
    this.x = mowerProperties.coordinate[0];
    this.y = mowerProperties.coordinate[1];
    this.direction = mowerProperties.direction;
    this.xBoundary = mowerProperties.lawnBoundary[0];
    this.yBoundary = mowerProperties.lawnBoundary[1];
  }

  //to get position of mower
  get position():string {
    return `${this.x} ${this.y} ${this.direction}`
  }

  //this is for rotate right
  rotateRight() {
    this.direction = this.rotate('right')
  }

  //this is for rotate left
  rotateLeft() {
    this.direction = this.rotate('left')
  }

  //this is for mower rotation
  rotate(direction) {
    let index = DIRECTIONS.indexOf(this.direction);
    if (direction === 'left') return index > 0 ? DIRECTIONS[index - 1] : DIRECTIONS[DIRECTIONS.length - 1];
    if (direction === 'right') return index === DIRECTIONS.length - 1 ? DIRECTIONS[0] : DIRECTIONS[index + 1];
  }

  //this is for mower validation
  mowerValidation(x, y) {
    return x >= 0 && x <= this.xBoundary && y >= 0 && y <= this.yBoundary
  }

  //this is for mower movement
  movement() {
    switch(this.direction.trim()) {
      case 'N':
        if (this.mowerValidation(this.x, this.y + 1)) { this.y += 1 }
        break;
      case 'E':
        if (this.mowerValidation(this.x + 1, this.y)) { this.x += 1 }
        break;
      case 'S':
        if (this.mowerValidation(this.x, this.y - 1)) { this.y -= 1 }
        break;
      case 'W':
        if (this.mowerValidation(this.x - 1, this.y)) { this.x -= 1 }
        break;
    }
  }
};