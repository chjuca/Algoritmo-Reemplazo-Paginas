import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InitialFormComponent } from './components/initial-form/initial-form.component';
import { GraphComponent } from './components/graph/graph.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitialFormComponent,
    GraphComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
