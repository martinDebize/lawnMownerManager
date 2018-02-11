import { Square } from "./square";

export class Lawn {
    squares: Square[][];
    xSize: number;
    ySize: number;

    constructor(xSize: number, ySize: number) {
        this.squares = [];
        this.xSize = xSize+1;
        this.ySize = xSize+1;
        for(var i: number = 0; i < xSize; i++) {
            this.squares[i] = [];
            for(var j: number = 0; j< ySize; j++) {
                this.squares[i][j] = new Square(j, xSize-i-1);
            }
        }
    }
}