import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HttpClientModule } from '@angular/common/http';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ImportePagarComponent } from './componentes/importe-pagar/importe-pagar.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ComprobarSeleccionadoPipe } from './pipes/comprobar-seleccionado.pipe';
import { MostrarColorSeleccionadoPipe } from './pipes/mostrar-color-seleccionado.pipe';
import { HttpPagesComponent } from './pages/http-pages/http-pages.component';
import { AnimacionesComponent } from './pages/animaciones/animaciones.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ProductosComponent,
    DetalleProductoComponent,
    PasarelaComponent,
    ContactoComponent,
    CarritoComponent,
    ImportePagarComponent,
    FiltrosComponent,
    ComprobarSeleccionadoPipe,
    MostrarColorSeleccionadoPipe,
    HttpPagesComponent,
    AnimacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Imports angular material
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxSliderModule,
    HttpClientModule,

    //Fin de imports angular material

    //imports de angular fire
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
