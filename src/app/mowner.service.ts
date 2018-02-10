import { Injectable } from '@angular/core';
import { Mowner } from './mowner';
import { Command } from './command';
import { CardinalDirection } from './cardinaldirection';

@Injectable()
export class MownerService {

  moveMowner(mowner: Mowner, iterationTime: number): void {
    for (var i=0; i<mowner.trajectory.length; i++) {
        switch (mowner.trajectory.charAt(i)) {
          case Command.FORWARD : {
            this.moveForward(mowner);
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

  private moveForward(mowner: Mowner): void {
    switch (mowner.orientation) {
      case CardinalDirection.NORTH : {
        mowner.y += 1;
        break;
      }
      case CardinalDirection.EAST : {
        mowner.x += 1;
        break;
      }
      case CardinalDirection.WEST : {
        mowner.x -= 1;
        break;
      }
      case CardinalDirection.SOUTH : {
        mowner.y -= 1;
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
