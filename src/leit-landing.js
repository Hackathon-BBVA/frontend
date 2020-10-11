import {LitElement, html, css} from 'lit-element';

import './land-menu';
import './land-page';

class LeitLanding extends LitElement {
    static get properties() {
        return {
            background: { type: String}
        }
    }

    constructor() {
        super();
        //this.background="#18b3ff"
    }



    render() {
        return html`
        <div style="background-color: ${this.background}"}'>
            <land-menu 
                options="Nosotros,Video,Try me" 
                optionsHREF="#nosotros,#video,#tryme"
                background="#18b3ff">
            </land-menu>

            <land-page></land-page>
        </div> 
        `;
    }
}

customElements.define('leit-landing', LeitLanding);