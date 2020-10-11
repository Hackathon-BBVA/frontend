import {LitElement, html, css} from 'lit-element';

class AppBatch extends LitElement {
    render() {
        return html`
        <h1>Batch Process</h1>
        `;
    }
}

customElements.define('app-batch', AppBatch);