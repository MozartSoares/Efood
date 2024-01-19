import Profile from '../Profile'
import { Container, List } from './styles'

import { Restaurante } from '../../pages/Home'

export type Props = {
  profiles: Restaurante[]
}

const ProfileList = ({ profiles }: Props) => {
  return (
    <Container>
      <List>
        {profiles.map((restaurante) => (
          <li key={restaurante.id}>
            <Profile
              id={restaurante.id}
              titulo={restaurante.titulo}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              infos={restaurante.infos}
              imagem={restaurante.capa}
              tipo={restaurante.tipo}
              destacado={restaurante.destacado}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}
export default ProfileList
