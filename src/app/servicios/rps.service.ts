import { Injectable } from '@angular/core';
import {RockPaperScissors} from '../componentes/piedra-papel-tijera/rock-paper-scissors.enum';

@Injectable()
export class RpsService {

  doesBeat(x: RockPaperScissors, y: RockPaperScissors){
    if(x === y)
      return null;
    return x == (((y + 1) % 3) || 3);
  }

}
