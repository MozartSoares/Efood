import { Banner, BannerContainer } from './styles'

type Props = {
  imagem: string
  titulo: string
  tipo: string
}

const BannerPerfil = ({ imagem, titulo, tipo }: Props) => {
  return (
    <BannerContainer>
      <Banner style={{ backgroundImage: `url(${imagem})` }}>
        <div className="container">
          <h4>{tipo}</h4>
          <h3>{titulo}</h3>
        </div>
      </Banner>
    </BannerContainer>
  )
}

export default BannerPerfil
