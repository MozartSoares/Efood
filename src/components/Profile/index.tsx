import StarSVG from '../../assets/SVG/StarSVG'
import * as S from './styles'
import Tag from '../Tag'

export type Props = {
  titulo: string
  avaliacao: number
  descricao: string
  infos: string[]
  tipo: string
  destacado: boolean
  imagem: string
  id: number
}

const Profile = ({
  titulo,
  avaliacao,
  imagem,
  tipo,
  descricao,
  destacado,
  id
}: Props) => {
  return (
    <S.Card>
      <S.Imagem style={{ backgroundImage: `url(${imagem})` }}>
        <S.ContainerTags>
          {destacado && <Tag type={'tag'}>Destaque da semana</Tag>}
          <Tag type="tag">{tipo}</Tag>
        </S.ContainerTags>
      </S.Imagem>
      <S.PerfilContainer>
        <S.TitleContainer>
          <S.Titulo>{titulo}</S.Titulo>
          <div>
            <S.Rating>{avaliacao}</S.Rating>
            <StarSVG />
          </div>
        </S.TitleContainer>
        <S.Description>{descricao}</S.Description>
        <Tag type="link" to={`/Perfil/${id}`}>
          Saiba mais
        </Tag>
      </S.PerfilContainer>
    </S.Card>
  )
}

export default Profile
