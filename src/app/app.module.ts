import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import * as firebase from 'firebase/compat';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaService } from './services/pelicula.service';
import { GeneroService } from './services/genero.service';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { PopupFormPeliculaComponent } from './pages/popup-form-pelicula/popup-form-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    FuncionesComponent,
    PopupFormPeliculaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,    
    AppRoutingModule
  ],
  providers: [
    PeliculaService,
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
