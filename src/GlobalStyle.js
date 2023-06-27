
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background: ${({theme}) => theme.backgroundColor};
  font-family: 'Lato', sans-serif;
}
`;