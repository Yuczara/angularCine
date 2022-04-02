import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Genero } from '../models/genero';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore:AngularFirestore) {}

  // **COLECCION PELICULAS FIREBASE **
  
    //método que permite obtener los documentos de la colección
    getPeliculas(){
      return this.firestore.collection('peliculas').snapshotChanges();
    } 

    //método para insertar un documento en la colleción 
    createPelicula(pelicula:Pelicula){
      return this.firestore.collection('peliculas').add(Object.assign({},pelicula));
    }

    //método para actualizar un documento existente en la colleción
    updatePelicula(pelicula:Pelicula){
      this.firestore.doc('peliculas/'+pelicula.id).update(pelicula);
    } 

    //método para eliminar un documento existente en la collecion 
    deletePelicula(peliculaId:string){
      this.firestore.doc('peliculas/'+peliculaId).delete();
    }
}
