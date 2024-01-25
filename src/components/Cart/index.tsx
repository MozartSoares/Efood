import { close, remove } from '../../store/reducers/cart'

import { Botao } from '../../GlobalStyles'
import * as S from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { formataPreco } from '../Cardapio'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                title="remover item"
                type="button"
              />
            </S.CartItem>
          ))}
        </ul>
        <S.PriceContainer>
          <p>Valor Total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </S.PriceContainer>
        <Botao>Continuar com a entrega</Botao>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
