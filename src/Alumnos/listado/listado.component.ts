import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  Alumnos: string[]=['sergio','Javier','Pilar','Vicensius'];
  ListaNueva:string[]=[]

  
  aggregateList():void{
  this.ListaNueva.push(this.Alumnos.pop()||'');
  
}
}
