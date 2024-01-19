import { BotaoPrato, CardPrato } from './styles'

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
        <BotaoPrato onClick={maisDetalhes}>Mais detalhes</BotaoPrato>
      </div>
    </CardPrato>
  )
}

export default Prato
