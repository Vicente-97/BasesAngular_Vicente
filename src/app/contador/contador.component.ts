import {Component} from '@angular/core'



@Component({
    selector: 'app-contador',
    templateUrl:'./contador.component.html'
})

export class ContadorComponent{
    title = 'Contador';
    titleBase='Base'
    contador : number=10;
    base: number =5;
  
    aggregate(value:number){
      this.contador+=value
}
}

