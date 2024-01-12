import trattoria from '../../assets/images/bannerTrattoria.png'
import { Banner, BannerContainer } from './styles'

const BannerPerfil = () => (
  <BannerContainer>
    <div className="container">
      <Banner style={{ backgroundImage: `url(${trattoria})` }}>
        <div>
          <h4>Italiana</h4>
          <h3>La Dolce Vitta Trattoria</h3>
        </div>
      </Banner>
    </div>
  </BannerContainer>
)

export default BannerPerfil
