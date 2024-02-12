import { styled } from 'styled-components'
import { breakpoints, cores } from '../../GlobalStyles'

export const Banner = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;

  z-index: 0;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    color: ${cores.branco};
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 156px;
    padding-top: 25px;
  }

  h4 {
    font-size: 32px;
    font-weight: 100;
    z-index: 1;
    height: 32px;
  }

  h3 {
    height: 35px;
    font-weight: bold;
    z-index: 1;
    font-size: 32px;
  }

  @media (${breakpoints.desktop}) {
    padding: 0 20px;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
`
