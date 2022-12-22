import * as React from "react"
import {createRoot} from "react-dom/client"

import App from "./app"
import "./web-components/hello-world"
import "./web-components/word-count"

const container = document.body.querySelector("#container") as Element
const root = createRoot(container)

root.render(<App />)
