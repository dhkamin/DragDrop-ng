import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent, FormtodolistComponent, ItemlistComponent } from './app.component';

import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    FormtodolistComponent,
    ItemlistComponent

  ],
  imports: [
    BrowserModule,
   
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DragulaModule,
    FlexLayoutModule
  ],
  entryComponents: [ 
    FormtodolistComponent,
    ItemlistComponent
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
