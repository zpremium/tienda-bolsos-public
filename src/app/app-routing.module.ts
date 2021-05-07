import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HttpPagesComponent } from './pages/http-pages/http-pages.component';
import { AnimacionesComponent } from './pages/animaciones/animaciones.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'productos',
    pathMatch:'full'
  },
  {
    path:'animaciones',
    component:AnimacionesComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'pasarela',
    component: PasarelaComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'detalle-producto/:id',
    component: DetalleProductoComponent
  },

  // {
  //   path:'**',
  //   redirectTo: 'productos',
  //   pathMatch:'full'
  // },
  {
    path:'httpClient',
    component: HttpPagesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
