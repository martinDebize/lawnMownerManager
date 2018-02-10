import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


import { AppComponent } from './app.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';



@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    ConfigurationFormComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
