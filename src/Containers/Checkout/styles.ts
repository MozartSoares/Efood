import { styled } from 'styled-components'
import { breakpoints, cores } from '../../GlobalStyles'

export const CheckoutContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
  h4 {
    color: ${cores.creme};
    margin-bottom: 16px;
    font-weight: bold;
    line-height: 18px;
    font-size: 16px;
  }

  .last-item {
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    color: ${cores.creme};
    line-height: 22px;
  }

  .error {
    border: 1px solid red;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.rosa};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
`

export const Form = styled.form`
  .flex-container {
    display: flex;
    gap: 34px;

    input {
      max-width: 155px;
      @media (${breakpoints.tablet}) {
        max-width: 100%;
      }
    }
    @media (${breakpoints.tablet}) {
      display: block;
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 34px;

    .cvv {
      max-width: 87px;
      @media (${breakpoints.tablet}) {
        max-width: 100%;
      }
    }

    @media (${breakpoints.tablet}) {
      display: block;
    }
  }

  .display-none {
    display: none;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 8px;
  color: ${cores.creme};

  input {
    min-height: 32px;
    height: 100%;
    background-color: ${cores.creme};
    border: 1px solid transparent;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
`
