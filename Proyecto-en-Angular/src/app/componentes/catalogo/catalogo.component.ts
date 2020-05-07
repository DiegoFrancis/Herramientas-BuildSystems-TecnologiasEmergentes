import { Component, OnInit } from '@angular/core';

//Servicios
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  //Variables

  productos: any = [];
  keyWord: string = "";

  numeroTotal: number = 0;
  pedido: any = [];

  constructor(private productosService:ProductosService, private carritoService:CarritoService) {
    this.productosService.datosProductos().subscribe((datos) => {
      this.productos = datos;
    })
   }

  ngOnInit(): void {
  }

  onKeydown(event) {
    var key = event.key;

    if(key.length == 1){
      this.keyWord += key;
      console.log(this.keyWord);
    }else if(key.length != 1 && key == "Backspace"){
      this.keyWord = this.keyWord.slice(0, -1);
      console.log(this.keyWord);
    }
  }

  agregarCarrito(numero, id){

    let pedido = {
      id: id,
      numero:numero
    }
    this.pedido.push(pedido);
    let total = 0;
    this.pedido.forEach(element => {
      total += element.numero * this.productos[element.id].precio; 
    });
    this.numeroTotal += parseInt(numero);
    this.carritoService.agregarCarrito(this.numeroTotal, pedido, total);
  }
}
