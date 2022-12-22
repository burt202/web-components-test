export interface IHelloWorld {
  foo: string
}

export class HelloWorld extends HTMLElement {
  constructor() {
    super()
  }

  get foo() {
    return this.getAttribute("foo") as string
  }

  connectedCallback() {
    this.innerHTML = `<h1>Hello world! ${this.foo}</h1>`
  }
}

customElements.define("hello-world", HelloWorld)
