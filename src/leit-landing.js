import { LitElement, html, css } from 'lit-element';

import './landing/section-login'
import './landing/section-features'
import './landing/section-video'
import './landing/section-equipo'
import './landing/section-info'

class LeitLanding extends LitElement {
    static get properties() {
        return {
            background: { type: String }
        }
    }

    constructor() {
        super();
        //this.background="#18b3ff"
    }



    render() {
        return html `
        <!--<div style="background-color: ${this.background}"}'>-->
        <link rel="stylesheet" href="../css/style.css">
        <div id="container">
            
        <!--nav-->
        <nav>
            <img src="images/img_logo.png" alt="BBVA smartspeech" id="headerlogo" />
        
            <ul>
                <li><a id="inicio" class="elemento" href="#">Sobre el proyecto</a></li>
                <li><a id="socios" class="elemento" href="#">Equipo Leitmotiv</a></li>
                <li><a id="galeria" class="elemento" href="#">Soporte</a></li>
            </ul>
        </nav>

        <!--login-->
        <section-login></section-login>
        <!--features-->
        <section-features></section-features>
        <!--video-->
        <section-video></section-video>
        <!--equipo-->
        <section-equipo></section-equipo>
        <!--info-->
        <section-info></section-info>
            
        </div>
        </div> 
        `;
    }
}

customElements.define('leit-landing', LeitLanding);