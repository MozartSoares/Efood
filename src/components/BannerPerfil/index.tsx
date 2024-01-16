import trattoria from '../../assets/images/bannerTrattoria.png'
import { Banner, BannerContainer } from './styles'

const BannerPerfil = () => (
  <BannerContainer>
    <Banner style={{ backgroundImage: `url(${trattoria})` }}>
      <div className="container">
        <h4>Italiana</h4>
        <h3>La Dolce Vitta Trattoria</h3>
      </div>
    </Banner>
  </BannerContainer>
)

export default BannerPerfil
