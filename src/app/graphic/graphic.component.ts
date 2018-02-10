import { Component, OnInit, Input } from '@angular/core';
import { Lawn } from '../lawn';
import { Mowner } from '../mowner';
import { CardinalDirection } from '../cardinaldirection';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() lawn: Lawn;

  @Input() mowners: Mowner[];

  checkType: any = CardinalDirection;

  constructor() { }

  ngOnInit() {
  }

}
