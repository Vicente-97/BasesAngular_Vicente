import { Component } from '@angular/core';


@Component({
    selector: 'app-lista',
    templateUrl:'./lista.component.html',
    styleUrls:['./lista.component.css' ]
})
export class listaComponent{
    compra=[
        {element:'Cerveza', quantity:100},
        {element:'Huevos', quantity:24},
        {element:'Batido Chocolate', quantity:1},
        {element:'Salmon', quantity:2}
    ]
}