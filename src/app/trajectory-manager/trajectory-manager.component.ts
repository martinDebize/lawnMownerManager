import { Component, OnInit, Input } from '@angular/core';
import { Mowner } from '../mowner';
import { MownerService } from '../mowner.service';
import { Lawn } from '../lawn';

@Component({
  selector: 'app-trajectory-manager',
  templateUrl: './trajectory-manager.component.html',
  styleUrls: ['./trajectory-manager.component.css']
})
export class TrajectoryManagerComponent implements OnInit {

  @Input() mowners: Mowner[];

  @Input() lawn: Lawn;

  iterationTime: number;

  moveMowners(mowners: Mowner[]): void {
    for (var mowner of mowners) {
      this.mownerService.moveMowner(mowner, this.lawn);
    }
  }

  constructor(private mownerService: MownerService) { }

  ngOnInit() {
  }

}
