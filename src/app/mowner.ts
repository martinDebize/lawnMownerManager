import { CardinalDirection } from "./cardinaldirection";

export class Mowner {
    x: number;
    y: number;
    orientation: CardinalDirection;

    constructor(x: number, y: number, orientation: CardinalDirection) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }
}