import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas=[
    {
      name:'Home',
      path:'/home'
    },
    {
      name:'Libros',
      path:'/libros'
    },
    {
      name:'Imagenes',
      path:'/imagenes'
    },
    {
      name:'Canciones',
      path:'/canciones'
    },
    {
      name:'About',
      path:'/about'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
