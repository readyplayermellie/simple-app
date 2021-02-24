import { LitElement, html, css } from 'lit-element';

class SimpleCard extends LitElement {
  static get styles () {
    return css`
      #card {
        -webkit-box-shadow: -2px 4px 14px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 4px 14px 0px rgba(0,0,0,0.75);
        box-shadow: -2px 4px 14px 0px rgba(0,0,0,0.75);
        width: 250px;
        height: 250px;
        margin: 15px;
        padding: 15px;
      }
    `  
  }

  static get properties () {
    return {}
  }

  constructor () {
    super()
  }

  render () {
    return html`
      <div id="card">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('simple-card', SimpleCard)