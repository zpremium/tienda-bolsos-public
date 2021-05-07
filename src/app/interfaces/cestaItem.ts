export interface cestaItem{

    id:string;
    color:string;
    cantidad:number;
    precio?:number;
    precioOferta?:number;


}

export interface producto{
  colores:string[];
  descripcion:string;
  img:string;
  nombre:string;
  precio:number;
  precioOferta?:number;
  tipo:string;
  url:string;
}
