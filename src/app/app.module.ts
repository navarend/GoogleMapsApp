import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { MapsEditComponent } from './components/maps/maps-edit.component';
import { ReactiveFormsModule } from "@angular/forms";

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  entryComponents: [
    MapsEditComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    MapsEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
     apiKey: 'YOUR API KEY'
   })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
