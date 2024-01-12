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
    padding-bottom: 8px;
  }

  h5 {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 8px;
  }
`
export const BotaoPrato = styled.button`
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
`
