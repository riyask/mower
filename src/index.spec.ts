import { equal } from "assert";
import {Mower} from "./Mower";
import {MowerOperation} from "./MowerOperation";
import {MowerProperties} from "./MowerProperties";

describe('Lawn Mower', function() {
  describe('initialization', function() {
    const moverPrerties : MowerProperties ={
      coordinate : [1, 1],
      direction : 'N',
      lawnBoundary : [5,5]
    }
    let mower = new Mower(moverPrerties);
    it('must set x and y coordinates and direction', function () {
      debugger;
      equal([mower.x, mower.y, mower.direction].toString(), [1, 1, 'N'].toString());
    });
  });

  describe('movements', function () {
    context('the mower position (1, 1) and has N direction initially', function () {
      const moverPrerties : MowerProperties ={
        coordinate : [1, 1],
        direction : 'N',
        lawnBoundary : [5,5]
      }
      let mower = new Mower(moverPrerties);
      it('must turn right', function () {
        mower.rotateRight();
        equal(mower.direction, 'E')
      });

      it('must turn left', function () {
        mower.rotateLeft();
        equal(mower.direction, 'N')
      });

      it('must move up', function () {
        mower.movement();
        equal(mower.y, 2)
      });
    });

    it('must not move beyond boundary', function () {
      const moverPrerties : MowerProperties ={
        coordinate : [1, 1],
        direction : 'N',
        lawnBoundary : [1,1]
      }
      let mower = new Mower(moverPrerties);
      mower.movement();
      equal(mower.y, 1)
    })
  });
});