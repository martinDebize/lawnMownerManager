import { Injectable } from '@angular/core';
import { Mowner } from './mowner';
import { Command } from './command';
import { CardinalDirection } from './cardinaldirection';
import { Lawn } from './lawn';

@Injectable()
export class MownerService {

  moveMowner(mowner: Mowner, lawn: Lawn, iterationTime: number) : void {
    for (var i=0; i<mowner.trajectory.length; i++) {
      switch (mowner.trajectory.charAt(i)) {
        case Command.FORWARD : {
          this.moveForward(mowner, lawn);
          break;
        }
        case Command.LEFT : {
          this.rotateLeft(mowner);
          break;
        }
        case Command.RIGHT : {
          this.rotateRight(mowner);
          break;
        }
      }
    }
  }

  private moveForward(mowner: Mowner, lawn: Lawn): void {
    switch (mowner.orientation) {
      case CardinalDirection.NORTH : {
        if (mowner.y + 1 < lawn.ySize) {
          mowner.y += 1;
        }
        break;
      }
      case CardinalDirection.EAST : {
        if (mowner.x + 1 < lawn.xSize) {
          mowner.x += 1;
        }
        break;
      }
      case CardinalDirection.WEST : {
        if (mowner.x >= 1) {
          mowner.x -= 1;
        }
        break;
      }
      case CardinalDirection.SOUTH : {
        if (mowner.y >= 1) {
          mowner.y -= 1;
        }
        break;
      }
    }
  }

  private rotateLeft(mowner: Mowner): void {
    switch (mowner.orientation) {
      case CardinalDirection.NORTH : {
        mowner.orientation = CardinalDirection.WEST;
        break;
      }
      case CardinalDirection.EAST : {
        mowner.orientation = CardinalDirection.NORTH;
        break;
      }
      case CardinalDirection.WEST : {
        mowner.orientation = CardinalDirection.SOUTH;
        break;
      }
      case CardinalDirection.SOUTH : {
        mowner.orientation = CardinalDirection.EAST;
        break;
      }
    }
  }

  private rotateRight(mowner: Mowner): void {
    switch (mowner.orientation) {
      case CardinalDirection.NORTH : {
        mowner.orientation = CardinalDirection.EAST;
        break;
      }
      case CardinalDirection.EAST : {
        mowner.orientation = CardinalDirection.SOUTH;
        break;
      }
      case CardinalDirection.WEST : {
        mowner.orientation = CardinalDirection.NORTH;
        break;
      }
      case CardinalDirection.SOUTH : {
        mowner.orientation = CardinalDirection.WEST;
        break;
      }
    }
  }
 
  constructor() { }

}
