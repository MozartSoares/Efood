import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'

export const Banner = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1366px;
  height: 280px;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: ${cores.branco};
    font-size: 32px;
  }

  h4 {
    position: absolute;
    top: 25px;
    left: 170px;
    font-weight: 100;
  }

  h3 {
    position: absolute;
    bottom: 32px;
    left: 170px;
    font-weight: bold;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  background-color: ${cores.creme};
`
