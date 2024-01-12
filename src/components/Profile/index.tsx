import StarSVG from '../../assets/SVG/StarSVG'
import {
  Card,
  Rating,
  TitleContainer,
  Titulo,
  Description,
  PerfilContainer,
  Imagem,
  ContainerTags
} from './styles'
import Tag from '../Tag'

export type Props = {
  titulo: string
  rating: string
  descricao: string
  infos: string[]
  imagem: string
}

const Profile = ({ titulo, rating, imagem, infos, descricao }: Props) => (
  <Card>
    <Imagem style={{ backgroundImage: `url(${imagem})` }}>
      <ContainerTags>
        {infos.map((info) => (
          <Tag type="tag" key={info}>
            {info}
          </Tag>
        ))}
      </ContainerTags>
    </Imagem>
    <PerfilContainer>
      <TitleContainer>
        <Titulo>{titulo}</Titulo>
        <div>
          <Rating>{rating}</Rating>
          <StarSVG />
        </div>
      </TitleContainer>
      <Description>{descricao}</Description>
      <Tag type="link" to="/Perfil">
        Saiba mais
      </Tag>
    </PerfilContainer>
  </Card>
)

export default Profile
