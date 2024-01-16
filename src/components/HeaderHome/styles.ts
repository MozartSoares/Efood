import styled from 'styled-components'
import { cores } from '../../GlobalStyles'

export const HeaderContainer = styled.header`
  display: flex;
  height: 384px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.creme};
  padding-top: 64px;

  div {
    max-width: 552px;
  }

  img {
    margin-top: 64px;
  }
`
export const Subtitle = styled.h2`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  margin-bottom: 40px;
`
