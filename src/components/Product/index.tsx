import StarSVG from '../../assets/SVG/StarSVG'
import {
  Card,
  Rating,
  RatingContainer,
  TitleContainer,
  Titulo,
  Description,
  InfosContainer
} from './styles'

const Product = () => (
  <Card>
    <div>
      <img src="" alt="" />
      <div>infos</div>
    </div>
    <InfosContainer>
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <div>
          <Rating>4.9</Rating>
          <StarSVG />
        </div>
      </TitleContainer>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <a href="#">Saiba mais</a>
    </InfosContainer>
  </Card>
)

export default Product
