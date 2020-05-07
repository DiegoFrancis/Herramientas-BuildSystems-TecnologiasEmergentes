import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Servicios
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

    //Variables

    productos: any = [];
    id: string;
  
    constructor(private productosService:ProductosService, private router:Router, private activatedRoute: ActivatedRoute) {
      this.productosService.datosProductos().subscribe((datos) => {
        this.productos = datos;
      })
     }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
