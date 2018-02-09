import { Component, OnInit } from '@angular/core';
import { Lawn } from '../lawn';
import { Mowner } from '../mowner';
import { CardinalDirection } from '../cardinaldirection';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  checkType: any = CardinalDirection;
  lawn: Lawn;
  mowners: Mowner[];
  mowner1: Mowner;
  mowner2: Mowner;

  constructor() { }

  ngOnInit() {
    this.lawn = new Lawn(6,6);
    this.mowner1 = new Mowner(1, 2, CardinalDirection.NORTH);
    this.mowner2 = new Mowner(3, 3, CardinalDirection.EAST);
    this.mowners = [];
    this.mowners.push(this.mowner1, this.mowner2);
  }

}
