import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private firestore:AngularFirestore) { }
  // **COLLECION GENEROS FIREBASE**
  getGeneros(){
    return this.firestore.collection('generos').snapshotChanges();
  } 

  createGenero(genero:Genero){
    return this.firestore.collection('generos').add(Object.assign({},genero));
  }

  updateGenero(genero:Genero){
    this.firestore.doc('generos/'+genero.id).update(genero);
  } 

  deleteGenero(generoId:string){
    this.firestore.doc('generos/'+generoId).delete();
  }
}
