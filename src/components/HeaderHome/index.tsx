import LogoSVG from '../../assets/SVG/LogoSVG'
import { HeaderContainer, Subtitle } from './styles'

const Header = () => (
  <HeaderContainer>
    <LogoSVG />
    <div>
      <Subtitle>
        Viva experiências gastronômicas no conforto da sua casa
      </Subtitle>
    </div>
  </HeaderContainer>
)

export default Header
