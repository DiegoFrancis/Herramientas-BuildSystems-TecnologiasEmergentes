import React from 'react';
import './header.css';

//imagenes
import barras from '../../img/bars-icon.png';
import carrito from '../../img/carrito-icon.png';
import exit from '../../img/exit-icon.png';

export default class Header extends React.Component{
    render(){
        return (
            <div className="header-header">
                <h1>La Bodega</h1>
                <div className="nav-header">
                    <button onClick={() => this.props.headerNav(0)}><img src={barras} /></button>
                    <button onClick={() => this.props.headerNav(2)}><img src={carrito} /><div className="circulo-header">{this.props.numeroTotal}</div></button>
                    <button><img src={exit} /></button>
                </div>
            </div>
        );
    }
}