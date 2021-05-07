import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { producto } from 'src/app/interfaces/producto';
import { Filtro } from '../../interfaces/filtros';
import { CestaService } from '../../services/cesta.service';
import { ColorServicioService } from '../../services/color-servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: producto[] = [];
  productosMostrar: producto[] = [];
  color: boolean;
  elementosFavoritos: producto[] = [];
  auxTipo = 'todos';

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private cestaServ: CestaService,
    private ColorServicio:ColorServicioService
  ) {}

  // mostrarColor(producto:producto){
  //   if (this.auxTipo==='todos') {
  //     return producto.img[0]
  //   } else {
  //     const nombreProd=producto.url;
  //     const colorElegido=nombreProd+'_'+this.auxTipo+'.jpeg'
  //     return colorElegido
  //   }
  //   }

  changeColor(i: producto) {
    i.fav = true;
    if (this.elementosFavoritos.length !== 0) {
      //no esta vacio
      if (this.elementosFavoritos.includes(i)) {
        //quitarlo de favoritos
        const index = this.elementosFavoritos.indexOf(i); //tenemos el indice dentro del array elementoFavoritos
        this.elementosFavoritos.splice(index, 1); //eliminar el producto del array
        i.fav = false; //ponerlo en blanco
      } else {
        this.elementosFavoritos.push(i); //añadir el producto al array elementoFavoritos
        i.fav = true;
      }
    } else {
      //esta vacio
      this.elementosFavoritos.push(i); //añadir el producto al array elementoFavoritos
      i.fav = true;
    }
    console.log('lista favoritos', this.elementosFavoritos);
    localStorage.setItem(
      'lista favoritos',
      JSON.stringify(this.elementosFavoritos)
    );
  }

  filtrarProductos(filtro: Filtro) {
    this.auxTipo = filtro.color;
    console.log('esto', filtro.color);

    this.ColorServicio.setColor(filtro)

    console.log('filtro que viene del hijo', filtro);

    /// filtrar primero el texto
    const arrayFiltrandoTexto = this.filtrarTexto(this.productos, filtro);

    /// filtro el precio
    const arrayFiltrandoPrecio = this.filtrarPrecio(
      arrayFiltrandoTexto,
      filtro
    );

    /// filtro el color
    const arrayFiltrandoColor = this.filtrarColor(arrayFiltrandoPrecio, filtro);

    /// filtro el tipo
    const arrayFiltrandoTipo = this.filtrarTipo(arrayFiltrandoColor, filtro);

    this.productosMostrar = [...arrayFiltrandoTipo];
  }

  filtrarTexto(array: producto[], filtro: Filtro): producto[] {
    const texto = filtro.texto;
    if (!texto) {
      return array;
    } else {
      return array.filter((producto: producto) => {
        const nombre = producto.nombre.toLowerCase().trim();
        return nombre.includes(texto.toLowerCase().trim());
      });
    }
  }

  filtrarPrecio(array: producto[], filtro: Filtro): producto[] {
    console.log('FILTRO PRECIO', filtro);
    const precioMaximo = filtro.precio.precioMaximo;
    const precioMinimo = filtro.precio.precioMinimo;

    return array.filter((producto: producto) => {
      const precioDeEsteProducto = this.cestaServ.precioFinal(producto);
      return (
        precioDeEsteProducto > precioMinimo &&
        precioDeEsteProducto < precioMaximo
      );
    });
  }

  filtrarColor(array: producto[], filtro: Filtro): producto[] {
    const color = filtro.color;

    if (!color || color === 'todos') {
      return array;
    } else {
      return array.filter((producto: producto) => {
        const arrayDeColoresDisponibles = producto.colores;
        return arrayDeColoresDisponibles.includes(color);
      });
    }
  }

  filtrarTipo(array: producto[], filtro: Filtro): producto[] {
    const tipo = filtro.tipo;
    if (!tipo || tipo === 'todos') {
      return array;
    } else {
      return array.filter((producto: producto) => {
        return producto.tipo === tipo;
      });
    }
  }

  ngOnInit(): void {
    this.db
      .collection('productos')
      .valueChanges()
      .subscribe((res) => {
        this.productos = res as producto[];
        this.filtrarProductos({
          precio: {
            precioMaximo: localStorage.getItem('precioMaximo')
              ? parseInt(localStorage.getItem('precioMaximo'))
              : 0,
            precioMinimo: localStorage.getItem('precioMinimo')
              ? parseInt(localStorage.getItem('precioMinimo'))
              : 100,
          },
          tipo: localStorage.getItem('tipo')
            ? localStorage.getItem('tipo')
            : 'todos',
          color: localStorage.getItem('color')
            ? localStorage.getItem('color')
            : 'todos',
          texto: localStorage.getItem('texto')
            ? localStorage.getItem('texto')
            : null,
        });
      });
  }

  navegar(i) {
    console.log('navegar', i);
    this.router.navigate(['detalle-producto', i]);
  }
}
