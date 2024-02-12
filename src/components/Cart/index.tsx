import { useDispatch, useSelector } from 'react-redux'

import { getTotalPrice, parseToBrl } from '../../utils'

import { remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item: Prato) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{parseToBrl(item.preco)}</p>
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
            <span>{parseToBrl(getTotalPrice(items))}</span>
          </S.PriceContainer>
        </>
      ) : (
        <h4>
          O carrinho está vazio, adicione pelo menos um item para continuar com
          a compra
        </h4>
      )}
    </>
  )
}

export default Cart
