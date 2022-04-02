import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private firestore:AngularFirestore) { }
  // **COLLECION SALAS FIREBASE**
  getSalas(){
    return this.firestore.collection('salas').snapshotChanges();
  } 

  createSala(sala:Sala){
    return this.firestore.collection('salas').add(Object.assign({},sala));
  }

  updateSala(sala:Sala){
    this.firestore.doc('salas/'+sala.id).update(sala);
  } 

  deleteSala(salaId:string){
    this.firestore.doc('salas/'+salaId).delete();
  }
}
