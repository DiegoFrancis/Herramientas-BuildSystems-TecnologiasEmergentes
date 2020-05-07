import { Component, OnInit, EventEmitter } from '@angular/core';

//Servicios
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Variables

  numeroTotal = 0;

  constructor(private carritoService:CarritoService) {

  }

  ngOnInit(): void {
    this.carritoService.numeroTotal.subscribe((numero: number) => {
      this.numeroTotal = numero;
    })

  }

}
