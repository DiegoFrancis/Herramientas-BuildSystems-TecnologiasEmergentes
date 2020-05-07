import React from 'react';
import './dashboard.css';

//Componentes
import Header from '../header/header';
import Catalogo from '../catalogo/catalogo';
import Detalles from '../detalles/detalles';
import Carrito from '../carrito/carrito';

export default class DashBoard extends React.Component{

    state = {
        show: 0,
        id: 0,
        numeroTotal:0,
        numeroCarrito:0
    }
    pedidos=[];

    verDetalles = (id) => {
        this.setState({
            show: 1,
            id: id
        })
    }

    headerNav = (show) =>{
        this.setState({
            show: show
        })
    }

    cantidadProductos = (numero, id) =>{
        let pedido = {
            id: id,
            numero: numero
        }
        this.pedidos.push(pedido);
        this.setState({
            numeroTotal: numero,
            numeroCarrito: this.state.numeroCarrito + numero
        })
    }

    render(){
        if(this.state.show == 0){
            return (
                <div className="contenedor-dashboard">
                    <Header headerNav={this.headerNav} numeroTotal={this.state.numeroCarrito}/>

                    <Catalogo verDetalles={this.verDetalles} cantidadProductos={this.cantidadProductos}/>
                </div>
            );
        }else if(this.state.show == 1){
            return (
                <div className="contenedor-dashboard">
                    <Header headerNav={this.headerNav} numeroTotal={this.state.numeroCarrito}/>

                    <Detalles id = {this.state.id}/>
                </div>
            );
        }else{
            return (
                <div className="contenedor-dashboard">
                    <Header headerNav={this.headerNav} numeroTotal={this.state.numeroCarrito}/>

                    <Carrito pedidos={this.pedidos}/>
                </div>
            );
        }
    }
}