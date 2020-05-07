import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //Variables

  @Output() numeroTotal = new EventEmitter();
  pedido = [];
  total = 0;

  constructor() { }

  agregarCarrito(numero, pedido, total){

    this.numeroTotal.emit(numero);
    this.pedido = this.pedido.concat(pedido);
    this.total = total;

  }

  borrarCarrito(){
    this.pedido = [];
    this.total = 0;
    this.numeroTotal.emit(0);
  }
  
}
