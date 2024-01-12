import { BotaoPrato, CardPrato } from './styles'

export type Props = {
  titulo: string
  descricao: string
  imagem: string
}

const Prato = ({ imagem, descricao, titulo }: Props) => (
  <CardPrato>
    <img src={imagem} alt="" />
    <div>
      <h5>{titulo}</h5>
      <p>{descricao}</p>
      <BotaoPrato>Adicionar ao carrinho</BotaoPrato>
    </div>
  </CardPrato>
)

export default Prato
