import {LitElement, html, css} from 'lit-element';

class AppHome extends LitElement {
    render() {
        return html`
        <h1>Home Dashboard</h1>
        `;
    }
}

customElements.define('app-home', AppHome);