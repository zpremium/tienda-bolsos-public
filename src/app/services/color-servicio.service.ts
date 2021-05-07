import { Injectable } from '@angular/core';
import { producto } from '../interfaces/cestaItem';
import { Filtro } from '../interfaces/filtros';

@Injectable({
  providedIn: 'root'
})
export class ColorServicioService {

    color = localStorage.getItem('colorDetalle') ? localStorage.getItem('colorDetalle') : null;

  constructor() {
    this.color='todos';
  }



  getColor(){
    return this.color;
  }


  setColor( filtro:Filtro){
    this.color=filtro.color;
    console.log('set servicio', this.color);

  }


}
