import FacebookSVG from '../../assets/SVG/FacebookSVG'
import InstagramSVG from '../../assets/SVG/InstagramSVG'
import TwitterSVG from '../../assets/SVG/TwitterSVG'
import LogoSVG from '../../assets/SVG/LogoSVG'
import { FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <LogoSVG />
    <div>
      <InstagramSVG />
      <FacebookSVG />
      <TwitterSVG />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
