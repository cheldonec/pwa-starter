import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        css`
          <CSS for your page goes here>
        `
    ];

    render() {
        return html`
          <HTML for your page goes here>
          <app-header ?enableBack="${true}"></app-header>
        `;
    }
}
