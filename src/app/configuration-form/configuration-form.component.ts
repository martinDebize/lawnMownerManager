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
  fileUploaded: boolean;
  formDisabled: boolean;
  checkType: any = CardinalDirection;

  readFile(event) : void {
    this.fileUploaded = true;
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
    this.lawn = new Lawn(Number(lawnConfiguration[0]) + 1, Number(lawnConfiguration[1]) + 1);
    this.mowners = [];
    var currentMownerConfiguration: String[];
    for (var i=1; i<textResultLines.length; i+=2) {
      var currentMowner = new Mowner();
      currentMownerConfiguration = textResultLines[i].split(" ");
      currentMowner.x = Number(currentMownerConfiguration[0]);
      currentMowner.y = Number(currentMownerConfiguration[1]);
      currentMowner.orientation = this.getDirectionFromString(currentMownerConfiguration[2].charAt(0));
      currentMowner.trajectory = textResultLines[i+1];
      this.mowners.push(currentMowner);
      this.mownerService.moveMowner(currentMowner, this.lawn, 1);
    }
  }

  getDirectionFromString(directionString: string): CardinalDirection {
    if (directionString === "N") {
      return CardinalDirection.NORTH;
    } else if (directionString === "E") {
      return CardinalDirection.EAST;
    } else if (directionString === "W") {
      return CardinalDirection.WEST;
    } else if (directionString === "S") {
      return CardinalDirection.SOUTH;
    }
  }

  addMowner() : void {
    this.mownersToBeConfigured.push(new Mowner());
  }

  deleteMowner(index) : void {
    this.mownersToBeConfigured.splice(index, 1);
  }

  submitConfiguration(): void {
    this.formDisabled = true;
    this.lawn = new Lawn(this.xSize, this.ySize);
    this.mowners = this.mownersToBeConfigured;
  }

  resetConfiguration(): void {
    this.lawn = null;
    this.mowners = null;
    this.mownersToBeConfigured = [];
    this.xSize = null;
    this.ySize = null;
    this.formDisabled = false;
    this.fileUploaded = false;
  }

  constructor(private mownerService: MownerService) { }

  ngOnInit() {
    this.mownersToBeConfigured = [];
    this.fileUploaded = false;
  }

}
