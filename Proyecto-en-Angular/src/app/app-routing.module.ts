import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tienda', component: DashboardComponent, children: [
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'carrito', component: CarritoComponent},
    { path: '', redirectTo: 'catalogo', pathMatch: 'prefix'}
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
