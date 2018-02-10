import { Component, OnInit, Input } from '@angular/core';
import { Mowner } from '../mowner';
import { MownerService } from '../mowner.service';

@Component({
  selector: 'app-trajectory-manager',
  templateUrl: './trajectory-manager.component.html',
  styleUrls: ['./trajectory-manager.component.css']
})
export class TrajectoryManagerComponent implements OnInit {

  @Input() mowners: Mowner[];

  moveMowner(mowner: Mowner): void {
    this.mownerService.moveMowner(mowner);
  }

  constructor(private mownerService: MownerService) { }

  ngOnInit() {
  }

}
