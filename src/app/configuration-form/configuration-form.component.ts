import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Mowner } from '../mowner';
import { Lawn } from '../lawn';
import { CardinalDirection } from '../cardinaldirection';
import { MownerService } from '../mowner.service';

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


  readFile(event) : void {
    var file: File = event.target.files[0]; 
    var myReader: FileReader = new FileReader();
    var textResult: String = null;
    myReader.onloadend = () => {
      this.computeFromFile(myReader.result);
    }
    myReader.readAsText(file);
  }

  computeFromFile(textResult: String) {
    var textResultLines: String[] = textResult.split("\n");
    var lawnConfiguration: String[] = textResultLines[0].split(" ");
    this.lawn = new Lawn(Number(lawnConfiguration[0]), Number(lawnConfiguration[1]));
    this.mowners = [];
    var currentMowner: Mowner = new Mowner();
    var currentMownerConfiguration: String[];
    for (var i=1; i<textResultLines.length; i+=2) {
      currentMownerConfiguration = textResultLines[i].split(" ");
      currentMowner.x = Number(currentMownerConfiguration[0]);
      currentMowner.y = Number(currentMownerConfiguration[1]);
      currentMowner.orientation = CardinalDirection.NORTH;
      currentMowner.trajectory = textResultLines[i+1];
      this.mowners.push(currentMowner);
      this.mownerService.moveMowner(currentMowner, 1000);
    }
  }

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

  constructor(private mownerService: MownerService) { }

  ngOnInit() {
    this.mownersToBeConfigured = [];
  }

}
