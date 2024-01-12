import LogoSVG from '../../assets/SVG/logoSVG'
import { HeaderContainer, LinkHome } from './styles'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div>
      <LinkHome to="/">Restaurantes</LinkHome>
      <div>
        <LogoSVG />
      </div>
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
