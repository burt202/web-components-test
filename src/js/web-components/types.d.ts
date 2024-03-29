import {HelloWorld, IHelloWorld} from "./hello-world"
import {LitTest} from "./lit"
import {WordCount} from "./word-count"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "word-count": Partial<React.DOMAttributes<WordCount>>
      "hello-world": Partial<React.DOMAttributes<HelloWorld>> & IHelloWorld
      "lit-test": Partial<LitTest>
    }
  }
}
