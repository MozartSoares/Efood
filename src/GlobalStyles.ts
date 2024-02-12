import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  rosa: '#E66767',
  creme: '#FFEBD9',
  amarelo: '#FFb930',
  brancoDiferente: '#FFF8F2'
}

export const breakpoints = {
  desktop: 'max-width: 1024px',
  tablet: 'max-width: 768px'
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
export const Button = styled.button`
  background-color: ${cores.creme};
  color: ${cores.rosa};
  max-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-top: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.creme};
  color: ${cores.rosa};
  max-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-top: 8px;
  cursor: pointer;

  .disabled {
    pointer-events: none;
  }
`
