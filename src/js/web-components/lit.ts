import {LitElement, html, property, customElement} from "lit-element"

@customElement("lit-test")
export class LitTest extends LitElement {
  @property({type: String}) name = ""

  render() {
    return html`Hello, ${this.name}. Welcome to LitElement!`
  }
}
