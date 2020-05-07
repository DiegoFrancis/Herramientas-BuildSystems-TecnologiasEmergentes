import React from 'react';
import './catalogo.css';

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

export default class Catalogo extends React.Component{

    state = {
        prodcutos: productosJSON,
        numero:0,
        inputValue: "",
    }

    imagenes = [
        aguacate,ajo,almendras,arandanos,lychee,calabza,canela,fresa,kiwi,limon,maiz,manzana,papa,pasta,pimienta,repollo,zanahoria,tomate
    ]

    cantidadProductos(numero){
        this.setState({
            numero: parseInt(numero),
            inputValue: numero,
        })
    }

    render(){
        
        return(
            <div className="contenedor-catalogo">
                <div className="header-catalogo">
                    <h1>Catálogo de productos</h1>
                    <div className="buscador-catalogor">
                        <label htmlFor="buscador">¿Qué estás buscando?</label>
                        <input
                            type="text" 
                            id="buscador" 
                            placeholder="Buscar producto"
                        />
                    </div>
                </div>
                <div className="catalogo-catalogo">
                    {this.state.prodcutos.map(e => 
                        <div className="producto-catalogo" key={e.id}>
                            <img src={this.imagenes[e.id]} alt={e.img} title={e.img}/>
                            <h2>{e.nombre}</h2>
                            <p>Precio: ${e.precio}</p>
                            <p>Disponibles: {e.disponibles}</p>
                            <div className="botones-prodcutos-catalogo">
                                <button onClick={() => this.props.verDetalles(e.id)}>Ver Más</button>
                                <button onClick={() => {this.props.cantidadProductos(this.state.numero, e.id); this.state.inputValue=''}}>Añadir</button>
                                <input 
                                    onChange={(event)=>{ this.cantidadProductos(event.target.value)}} 
                                    type="number" 
                                    min="1"
                                    value={this.state.inputValue}
                                />
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        );
    }
}