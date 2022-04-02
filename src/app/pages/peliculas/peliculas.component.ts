import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { Sala } from 'src/app/models/sala';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { SalaService } from 'src/app/services/sala.service';
@Component({
  selector: 'app-canciones',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas:Pelicula[]=[];
  pelicula = new Pelicula();

  generos:Genero[]=[];
  genero = new Genero();

  salas:Sala[]=[];
  sala = new Sala();

  constructor(private peliculaService:PeliculaService,  private salaService:SalaService, private generoService:GeneroService) { }

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

  /*PELICULAS */
  insertarPelicula(){
    this.peliculaService.createPelicula(this.pelicula);
    this.pelicula= new Pelicula();
  }
  
  selectPelicula(libro:Pelicula){
    this.pelicula = libro;
  }

  update(){
    this.peliculaService.updatePelicula(this.pelicula);
    this.pelicula = new Pelicula();
  }

  delete(id:string){
    this.peliculaService.deletePelicula(id);
    this.pelicula = new Pelicula();
  }


   /********************* GENEROS **************************************************/
   insertarGenero(){
    this.generoService.createGenero(this.genero);
    this.genero= new Genero();
  }
  
  selectGenero(genero:Genero){
    this.genero = genero;
  }

  updateGenero(){
    this.generoService.updateGenero(this.genero);
    this.genero = new Genero();
  }

  deleteGenero(id:string){
    this.generoService.deleteGenero(id);
    this.genero = new Genero();
  }
  
   /********************* SALAS **************************************************/
   insertarSala(){
    this.salaService.createSala(this.sala);
    this.sala= new Sala();
  }
  
  selectSala(sala:Sala){
    this.sala = sala;
  }

  updateSala(){
    this.salaService.updateSala(this.sala);
    this.sala = new Sala();
  }

  deleteSala(id:string){
    this.salaService.deleteSala(id);
    this.sala = new Sala();
  }


}
