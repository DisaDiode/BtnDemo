import logo from './assets/img/policia-escudo.png';
import './assets/css/index.css';
import React, {Component} from 'react'

class Policeshield extends Component{

    render(){

        return(
            <img src={logo}  className="logo-police" />
        );
    }
}
reactDom.render(
    <Policeshield/>, document.getElementById('policeshield')
 );