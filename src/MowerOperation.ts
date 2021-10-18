
import { Mower } from "./Mower";
import { MowerProperties } from "./MowerProperties";

export  class MowerOperation extends Mower {
  constructor(mowerProperties: MowerProperties) {
    super(mowerProperties);
  }
  moveMower(commands) {
    commands.forEach(function(c) {
      switch(c) {
        case 'L':
          this.rotateLeft();
          break;
        case 'R':
          this.rotateRight();
          break;
        case 'F':
          this.movement();
          break;
      }
    }.bind(this))
    return this.position;
  }
};