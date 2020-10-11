import {LitElement, html, css} from 'lit-element';

class LandPage extends LitElement {
    render() {
        return html`
        <h1>Landing page</h1>
        `;
    }
}

customElements.define('land-page', LandPage);