import React from 'react';
import './carrito.css';

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


export default class App extends React.Component{

    state = {
        prodcutos: productosJSON
    }
    pedidos = [];
    pedidos = this.props.pedidos;

    imagenes = [
        aguacate,ajo,almendras,arandanos,lychee,calabza,canela,fresa,kiwi,limon,maiz,manzana,papa,pasta,pimienta,repollo,zanahoria,tomate
    ]

    render(){
        return (
            <div className="contenedor-carrito">
                <div className="header-carrito">
                    <h1>Carrito de compras</h1>
                </div>

                <div className="carrito-carrito">
                    <div className="productos-carrito">
                        {this.pedidos.map(e =>
                            <div className="producto-carrito" key={e.id}>
                                <img src={this.imagenes[e.id]} alt={this.state.prodcutos[e.id].img} title={this.state.prodcutos[e.id].img}/>
                                <div className="info-producto-carrito">
                                    <p>{this.state.prodcutos[e.id].nombre}</p>
                                    <p>Unidades: {e.numero}</p>
                                    <p>Subtotal: ${e.id * this.state.prodcutos[e.id].precio}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="info-pago-carrito">
                        <p>Total: $</p>
                        <div className="botones-carrito">
                            <button>Cancelar</button>
                            <button>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}