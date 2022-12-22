import {HelloWorld} from "./web-components/hello-world"
import {WordCount} from "./web-components/word-count"

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & {children: any}>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["word-count"]: CustomElement<WordCount>
      ["hello-world"]: CustomElement<HelloWorld>
    }
  }
}
