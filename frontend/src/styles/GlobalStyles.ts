import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;

/*import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    border: none;
    cursor: pointer;
  }

  input, select {
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`

export default GlobalStyles
*/