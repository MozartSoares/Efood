import { styled } from 'styled-components'
import { cores } from '../../GlobalStyles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${cores.branco};
`

export const Imagem = styled.div`
  width: 100%;
  height: 217px;
  position: relative;
`

export const ContainerTags = styled.div`
  width: 100%;
  position: absolute;
  top: 16px;
  display: flex;
  margin-right: 8px;
  justify-content: flex-end;

  ${TagContainer} {
    margin-right: 16px;
  }
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
  max-height: 21px;
`

export const PerfilContainer = styled.div`
  padding: 7px;
  border: 1px solid ${cores.rosa};
  border-top: 0;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
  }

  ${TagContainer} {
    padding-bottom: 4px;
    font-size: 14px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  margin-bottom: 16px;
  margin-top: 8px;
`
