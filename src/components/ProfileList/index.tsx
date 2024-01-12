import Profile from '../Profile'
import { Container, List } from './styles'

import Perfil from '../../Models/Perfil'

export type Props = {
  profiles: Perfil[]
}

const ProfileList = ({ profiles }: Props) => (
  <Container>
    <List>
      {profiles.map((perfil) => (
        <Profile
          key={perfil.id}
          titulo={perfil.titulo}
          rating={perfil.rating}
          descricao={perfil.descricao}
          infos={perfil.infos}
          imagem={perfil.imagem}
        />
      ))}
    </List>
  </Container>
)

export default ProfileList
