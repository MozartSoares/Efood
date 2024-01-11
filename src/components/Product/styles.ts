import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
`

export const Rating = styled.h5`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};
  margin-right: 8px;
`

export const InfosContainer = styled.div`
  padding: 8px;
  border: 1px solid ${cores.rosa};
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
`
