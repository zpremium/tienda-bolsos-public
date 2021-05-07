import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprobarSeleccionadoPipe'
})
export class ComprobarSeleccionadoPipe implements PipeTransform {

  transform(elementosFavortos: string[], ...args: any[]): unknown {

    // const arrayDeTodosLosFavoritos;
    // const elIdDeEsteProducto;

    let arrayDeElementosFavoritos = elementosFavortos;
    let productoUrl = args[0];
    let favorito = args[1];
    console.log('PARAMETROS DEL PIPE', {
    arrayDeElementosFavoritos, productoUrl
    })


    return ( arrayDeElementosFavoritos.indexOf(productoUrl) >= 0 ) ? favorito : !favorito
    }

}
