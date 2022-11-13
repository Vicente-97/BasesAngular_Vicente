import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrawlStarsModule } from 'src/brawl-stars/brawl-stars.module';

 import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador.component';
// import { listaComponent } from './lista/lista.component';
// import { alumnosModule } from '../Alumnos/alumnos.module';


@NgModule({
  declarations: [
     AppComponent,
    // ContadorComponent,
    // listaComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    // alumnosModule
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
