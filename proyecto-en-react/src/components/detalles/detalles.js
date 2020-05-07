import React from 'react';
import './detalles.css';

//Imagenes
import aguacate from '../../img/aguacate.jpg';
import ajo from '../../img/ajo.jpg';
import almendras from '../../img/almendras.jpg';
import arandanos from '../../img/arandanos.jpg';
import lychee from '../../img/lychee.jpg';
import calabza from '../../img/calabaza.jpg';
import canela from '../../img/canela.jpg';
import fresa from '../../img/fresa.jpg';
import kiwi from '../../img/kiwi.jpg';
import limon from '../../img/limon.jpg';
import maiz from '../../img/maiz.jpg';
import manzana from '../../img/manzana.jpg';
import papa from '../../img/papa.jpg';
import pasta from '../../img/pasta.jpg';
import pimienta from '../../img/pimienta.jpg';
import repollo from '../../img/repollo.jpg';
import zanahoria from '../../img/zanahoria.jpg';
import tomate from '../../img/tomate.jpg';

//JSON
import productosJSON from '../../productos.json';

export default class DashBoard extends React.Component{

    state = {
        productos: productosJSON
    }

    imagenes = [
        aguacate,ajo,almendras,arandanos,lychee,calabza,canela,fresa,kiwi,limon,maiz,manzana,papa,pasta,pimienta,repollo,zanahoria,tomate
    ];

    render(){
        return(
            <div className="contenedor-detalles">
                <div className="header-detalles">
                <h1>{this.state.productos[this.props.id].nombre}</h1>
                </div>
                <div className="producto-detalles">
                    <img src={this.imagenes[this.props.id]} alt={this.state.productos[this.props.id].img} title={this.state.productos[this.props.id].img}/>
                    <div className="info-producto-detalles">
                        <p>Precio: ${this.state.productos[this.props.id].precio}</p>
                        <p>Unidades disponibles: {this.state.productos[this.props.id].disponibles}</p>
                    </div>
                </div>
                <button>Atras</button>
            </div>
        );
    }
}