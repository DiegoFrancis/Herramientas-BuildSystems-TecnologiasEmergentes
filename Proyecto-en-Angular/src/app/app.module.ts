import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

//Servicios
import { LoginService } from './servicios/login.service';
import { ProductosService } from './servicios/productos.service';
import { CarritoService } from './servicios/carrito.service';

//Rounting Module
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CatalogoComponent,
    DetallesComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    ProductosService,
    LoginService,
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
