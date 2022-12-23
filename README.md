# web-components-test

A brief look into the world of web components. This is a simple repo that tries out the following:

- native web components
- web components using `lit`
- using web components in react
- making web components 'typed'

### Findings

- to use web components in a react/typescript project - custom types for JSX namespace need to be added
- native web component can be typed without defaults
- can only get `lit` web components typed with defaults (so far) which is not great as it means TS wont inform you if youre calling the component wrong
- https://www.npmjs.com/package/@stencil/core is most used web component library in 2022, will try this next

### To run

`npm run dev`
