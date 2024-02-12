import styled from 'styled-components'
import { cores } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  background-color: ${cores.creme};
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 8px;
    margin-top: 3px;
  }

  p {
    color: ${cores.rosa};
    font-size: 10px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
`
