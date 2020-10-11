import {LitElement, html, css} from 'lit-element';

class AppStatus extends LitElement {
    render() {
        return html`
        <h1>Server Status</h1>
        `;
    }
}

customElements.define('app-status', AppStatus);