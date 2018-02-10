import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { FormsModule } from '@angular/forms';


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
    FileUploadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
