import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import Logo from '../../assets/SVG/LogoSVG'
import { HeaderContainer, LinkHome } from './styles'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const returnCartLength = () => {
    if (items.length === 1) {
      return `${items.length} produto no carrinho`
    }
    return `${items.length} produtos no carrinho`
  }

  const cartText = returnCartLength()

  return (
    <HeaderContainer>
      <div>
        <LinkHome to="/">Restaurantes</LinkHome>
        <div>
          <Logo />
        </div>
        <p onClick={openCart}>{cartText}</p>
      </div>
    </HeaderContainer>
  )
}

export default HeaderPerfil
