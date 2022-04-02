import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {
  peliculas:Pelicula[]=[];
  pelicula = new Pelicula();

   constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(data =>{
      this.peliculas=data.map(doc =>{
        return {
          ...doc.payload.doc.data() as Pelicula,
          id:doc.payload.doc.id
        };
      })
    });
  }
}

