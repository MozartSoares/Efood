import styled from 'styled-components'
import { cores } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-color: ${cores.creme};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 186px;
  font-size: 18px;
  color: ${cores.rosa};

  div {
    display: grid;
    max-width: 1024px;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  p {
    text-align: right;
  }
`
export const LinkHome = styled(Link)`
  color: ${cores.rosa};
`
