import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { Sala } from 'src/app/models/sala';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas:Pelicula[]=[];
  pelicula = new Pelicula();

  generos:Genero[]=[];
  genero = new Genero();

  salas:Sala[]=[];
  sala = new Sala();


  constructor(private salaService:SalaService,private peliculaService:PeliculaService, private generoService:GeneroService) { }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(data =>{
      this.peliculas=data.map(doc =>{
        return {
          ...doc.payload.doc.data() as Pelicula,
          id:doc.payload.doc.id
        };
      })
    });

    this.generoService.getGeneros().subscribe(data =>{
      this.generos=data.map(doc =>{
        return {
          ...doc.payload.doc.data() as Genero,
          id:doc.payload.doc.id
        };
      })
    });

    this.salaService.getSalas().subscribe(data =>{
      this.salas=data.map(doc =>{
        return {
          ...doc.payload.doc.data() as Sala,
          id:doc.payload.doc.id
        };
      })
    });
  }

}
