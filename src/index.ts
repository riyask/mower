import {Mower} from "./Mower";
import {MowerOperation} from "./MowerOperation";
import {MowerProperties} from "./MowerProperties";
import { readFileSync } from 'fs';
import * as path from 'path';

const inputData = readFileSync(path.resolve(__dirname, '../input.txt'), 'utf8').split("\n");
const lawn = inputData[0].split(' ').map(c => parseInt(c));
let i = 1;
while (i < inputData.length) {
  const position = inputData[i].split(' ');
  const moverProperties: MowerProperties = {
    coordinate : [parseInt(position[0]), parseInt(position[1])],
    direction: position[2].trim(),
    lawnBoundary : inputData[0].split(' ').map(c => parseInt(c))
  }
  const commands = inputData[i + 1].split('');
  const mowerOperation = new MowerOperation(moverProperties);
  let finalPosition =mowerOperation.moveMower(commands);
  console.log(finalPosition);
  i += 2;
}
