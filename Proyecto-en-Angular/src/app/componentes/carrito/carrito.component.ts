import { Component, OnInit } from '@angular/core';

//Servicios
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  //Variables

  pedidos = [];
  productos:any = [];
  total = 0;

  constructor(private productosService:ProductosService, private carritoService:CarritoService) { 
  }

  ngOnInit(): void {
    this.productosService.datosProductos().subscribe((datos) => {
      this.productos = datos;
    });

    this.pedidos = this.pedidos.concat(this.carritoService.pedido);
    this.total += this.carritoService.total;
  }

  cancelarCompra(){
    this.pedidos = [];
    this.total = 0;
    this.carritoService.borrarCarrito();
  }

  pagarProductos(){
    this.pedidos = [];
    this.total = 0;
    this.carritoService.borrarCarrito();
  }

}
