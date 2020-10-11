import {LitElement, html, css} from 'lit-element';

import './app-menu';
import './app-home';
import './app-status';
import './app-batch';

class LeitApp extends LitElement {
    static get properties() {
        return {
            currentView: { type: String },
            background: { type: String}
        }
    }

    constructor() {
        super();
        //this.background="#18b3ff"
        this.currentView = '#status';
    }

    showCurrentView() {
        switch(this.currentOption) {
            case '#home'   : return html`<app-home></app-home>`;
            case '#status' : return html`<app-status></app-status>`;
            case '#batch'  : return html`<app-batch></app-batch>`;
        }
    }

    render() {
        return html`
        <div style="background-color: ${this.background}"}'>
            <app-menu id='menu'
                options="Home,Server(DB) Status,Batch,-Discover,-Configuration,-Log Out" 
                optionsHREF="#home,#status,#batch,#discover,#config,#logout"
                background="#18b3ff">
            </app-menu>

            <div>${this.showCurrentView()}</div>
        </div> 
        `;
    }
}

customElements.define('leit-app', LeitApp);