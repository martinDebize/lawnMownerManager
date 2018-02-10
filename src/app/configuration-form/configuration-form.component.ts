import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Mowner } from '../mowner';
import { Lawn } from '../lawn';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent implements OnInit {

  xSize: number;
  ySize: number;
  lawn: Lawn;
  mownersToBeConfigured: Mowner[];
  mowners: Mowner[];

  addMowner() : void {
    this.mownersToBeConfigured.push(new Mowner());
  }

  deleteMowner(index) : void {
    this.mownersToBeConfigured.splice(index, 1);
  }

  submitConfiguration(): void {
    this.lawn = new Lawn(this.xSize, this.ySize);
    this.mowners = this.mownersToBeConfigured;
  }

  constructor() { }

  ngOnInit() {
    this.mownersToBeConfigured = [];
  }

}
