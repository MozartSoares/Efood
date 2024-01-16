import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  rosa: '#E66767',
  creme: '#FFEBD9',
  amarelo: '#FFb930',
  brancoDiferente: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'roboto', sans-serif;
    list-style: none;
    text-decoration: none;

    body {
      background-color: ${cores.brancoDiferente};
    }
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }



`
