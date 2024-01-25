import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import PratoCard from '../Prato'
import * as S from './styles'
import close from '../../assets/images/closeX.png'
import { Restaurante } from '../../pages/Home'
import { useDispatch } from 'react-redux'

import Prato from '../Prato'

export type Prato = Restaurante['cardapio'][0]

export type Props = {
  cardapio: Prato[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = ({ cardapio }: Props) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [selected, setSelected] = useState<Prato>()

  const dispatch = useDispatch()

  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility)
  }

  const select = (prato: Prato) => {
    toggleModalVisibility()
    setSelected(prato)
  }

  const addItem = () => {
    dispatch(add(selected))
    dispatch(open())
  }

  return (
    <S.ContainerCardapio>
      <S.ListCardapio>
        {cardapio.map((item) => (
          <li>
            <PratoCard
              key={item.id}
              nome={item.nome}
              descricao={item.descricao}
              foto={item.foto}
              maisDetalhes={() => select(item)}
            />
          </li>
        ))}
      </S.ListCardapio>
      <S.Modal className={modalVisibility ? 'visivel' : ''}>
        <S.ModalContent>
          <S.BotaoFechar
            src={close}
            alt="Ícone de fechar"
            onClick={() => toggleModalVisibility()}
          />
          {selected && (
            <>
              <img src={selected.foto} alt="Foto do prato" />
              <S.InfosContainer>
                <h4>{selected.nome}</h4>
                <p>
                  {selected.descricao}
                  <br />
                  <br />
                  Serve de {selected.porcao}
                </p>
                <S.BotaoModal onClick={addItem}>
                  Adicionar ao carrinho - {formataPreco(selected.preco)}
                </S.BotaoModal>
              </S.InfosContainer>
            </>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => toggleModalVisibility()}></div>
      </S.Modal>
    </S.ContainerCardapio>
  )
}

export default Cardapio
