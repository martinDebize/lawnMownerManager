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

  lawn: Lawn;
  mownersToBeConfigured: Mowner[];
  mowners: Mowner[];

  initializeMowner() : void {
    this.mownersToBeConfigured.push(new Mowner());
  }

  constructor() { }

  ngOnInit() {
    this.mownersToBeConfigured = [];
  }

}
