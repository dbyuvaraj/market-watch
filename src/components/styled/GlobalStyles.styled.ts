import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited {
    color: #222222;
  }
`

export default GlobalStyle
