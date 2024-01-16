import StarSVG from '../../assets/SVG/StarSVG'
import * as S from './styles'
import Tag from '../Tag'

export type Props = {
  titulo: string
  rating: string
  descricao: string
  infos: string[]
  imagem: string
}

const Profile = ({ titulo, rating, imagem, infos, descricao }: Props) => (
  <S.Card>
    <S.Imagem style={{ backgroundImage: `url(${imagem})` }}>
      <S.ContainerTags>
        {infos.map((info) => (
          <Tag type="tag" key={info}>
            {info}
          </Tag>
        ))}
      </S.ContainerTags>
    </S.Imagem>
    <S.PerfilContainer>
      <S.TitleContainer>
        <S.Titulo>{titulo}</S.Titulo>
        <div>
          <S.Rating>{rating}</S.Rating>
          <StarSVG />
        </div>
      </S.TitleContainer>
      <S.Description>{descricao}</S.Description>
      <Tag type="link" to="/Perfil">
        Saiba mais
      </Tag>
    </S.PerfilContainer>
  </S.Card>
)

export default Profile
