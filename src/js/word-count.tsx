function countWords(node: HTMLElement) {
  const text = node.innerText || node.textContent

  if (!text) return 0

  return text
    .trim()
    .split(/\s+/g)
    .filter((a) => a.trim().length > 0).length
}

class WordCount extends HTMLParagraphElement {
  constructor() {
    super()

    const wcParent = this.parentElement
    if (!wcParent) return

    const count = `Words: ${countWords(wcParent)}`

    const shadow = this.attachShadow({mode: "open"})

    const text = document.createElement("span")
    text.textContent = count

    shadow.appendChild(text)

    setInterval(function () {
      const count = `Words: ${countWords(wcParent)}`
      text.textContent = count
    }, 200)
  }
}

customElements.define("word-count", WordCount, {extends: "p"})
