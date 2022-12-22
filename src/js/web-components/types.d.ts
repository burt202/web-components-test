import {HelloWorld} from "./hello-world"
import {WordCount} from "./word-count"

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type CustomElement<T> = Partial<T & React.DOMAttributes<T> & {children: any}>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["word-count"]: CustomElement<WordCount>
      ["hello-world"]: CustomElement<HelloWorld>
    }
  }
}
