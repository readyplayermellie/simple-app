import { LitElement, html, css } from 'lit-element';

class SimpleButton extends LitElement {
  static get styles () {
    return css`
      button {
        background-color: #fff;
        padding: 15px;
        margin: 15px;
      }
    `  
  }

  static get properties () {
    return {
      content: {
        type: String,
        attribute: 'content',
      }
    }
  }

  constructor () {
    super()
  }

  render () {
    return html`
      <button>${this.content}</button>
    `
  }
}

customElements.define('simple-button', SimpleButton)