import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'
import lixeira from '../../assets/images/Lixeira.png'

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.creme};
  padding: 8px;
  padding-bottom: 12px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;
    color: ${cores.rosa};

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${lixeira});
    background-size: cover;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    flex-shrink: 0;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${cores.creme};
  font-size: 14px;
  font-weight: bold;
`
