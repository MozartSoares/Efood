import Prato from '../Models/Prato'
import PratoCard from '../components/Prato'
import { ContainerCardapio, ListCardapio } from './styles'

export type Props = {
  pratos: Prato[]
}

const Cardapio = ({ pratos }: Props) => (
  <ContainerCardapio>
    <ListCardapio>
      {pratos.map((prato) => (
        <PratoCard
          key={prato.id}
          titulo={prato.titulo}
          descricao={prato.descricao}
          imagem={prato.imagem}
        />
      ))}
    </ListCardapio>
  </ContainerCardapio>
)

export default Cardapio
