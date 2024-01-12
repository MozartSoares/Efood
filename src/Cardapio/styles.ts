import styled from 'styled-components'
import { cores } from '../GlobalStyles'

export const ContainerCardapio = styled.div`
  background-color: ${cores.brancoDiferente};
  max-width: 1024px;
  padding-top: 52px;
  padding-bottom: 128px;
  margin: 0 auto;
`

export const ListCardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
