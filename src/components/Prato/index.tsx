import { Button } from '../../GlobalStyles'
import { CardPrato } from './styles'

type MaisDetalhesType = () => void

export type Props = {
  foto: string
  nome: string
  descricao: string
  maisDetalhes: MaisDetalhesType
}

const Prato = ({ descricao, foto, nome, maisDetalhes }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 168) {
      return description.slice(0, 165) + '...'
    }
    return description
  }

  return (
    <CardPrato>
      <img src={foto} alt="Foto do prato" />
      <div>
        <h5>{nome}</h5>
        <p>{getDescription(descricao)}</p>
        <Button onClick={maisDetalhes}>Mais detalhes</Button>
      </div>
    </CardPrato>
  )
}

export default Prato
