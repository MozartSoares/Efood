import styled from 'styled-components'
import { breakpoints } from '../../GlobalStyles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 120px;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    place-items: center;
    padding: 10px;
  }
`
