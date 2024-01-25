import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'

export const CardPrato = styled.div`
  background-color: ${cores.rosa};
  max-width: 320px;
  width: 100%;
  max-height: 338px;
  height: 100%;
  color: ${cores.creme};
  font-size: 14px;
  padding: 8px;

  img {
    object-fit: cover;
    margin-bottom: 4px;
    max-width: 304px;
    max-height: 167px;
    height: 100%;
    width: 100%;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    line-height: 22px;
    min-height: 88px;
  }
`
