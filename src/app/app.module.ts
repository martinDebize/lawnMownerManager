import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';
import { TrajectoryManagerComponent } from './trajectory-manager/trajectory-manager.component';
import { MownerService } from './mowner.service';


@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    ConfigurationFormComponent,
    TrajectoryManagerComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule
  ],
  providers: [MownerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
