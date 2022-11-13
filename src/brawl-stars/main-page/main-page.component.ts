import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Personajes=[
    {pj:'Shelly', health:3600},
    {pj:'Nita', health:3800},
    {pj:'Colt', health:2800},
    {pj:'Sergio', health:500},

  ]
}
