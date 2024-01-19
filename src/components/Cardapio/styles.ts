import styled from 'styled-components'
import { cores } from '../../GlobalStyles'
import { BotaoPrato } from '../Prato/styles'

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
export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;

  .overlay {
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  padding: 32px;

  img {
    height: 280px;
    width: 280px;
  }
`
export const BotaoModal = styled(BotaoPrato)`
  max-width: 218px;
  padding: 4px 7px;
  line-height: normal;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  color: ${cores.branco};

  p {
    font-weight: 400;
    margin-bottom: 8px;
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const BotaoFechar = styled.img`
  position: absolute;
  max-height: 16px;
  max-width: 16px;
  height: 100%;
  width: 100%;
  top: 8px;
  right: 8px;
`
