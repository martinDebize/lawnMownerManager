import { Square } from "./square";

export class Lawn {
    squares: Square[][];

    constructor(xSize: number, ySize: number) {
        this.squares = [];
        for(var i: number = 0; i < xSize; i++) {
            this.squares[i] = [];
            for(var j: number = 0; j< ySize; j++) {
                this.squares[i][j] = new Square(j, xSize-i-1);
            }
        }
    }
}