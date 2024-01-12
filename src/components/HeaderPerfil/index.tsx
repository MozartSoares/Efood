import Logo from '../../assets/SVG/LogoSVG'
import { HeaderContainer, LinkHome } from './styles'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div>
      <LinkHome to="/">Restaurantes</LinkHome>
      <div>
        <Logo />
      </div>
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
