import Prato from '../../Models/Prato'
import PratoCard from '../Prato'
import * as S from './styles'
import pizza from '../../assets/images/pratoModal.png'
import close from '../../assets/images/closeX.png'

export type Props = {
  pratos: Prato[]
}

const Cardapio = ({ pratos }: Props) => {
  return (
    <S.ContainerCardapio>
      <S.ListCardapio>
        {pratos.map((prato) => (
          <PratoCard
            key={prato.id}
            titulo={prato.titulo}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </S.ListCardapio>
      <S.Modal>
        <S.ModalContent>
          <S.BotaoFechar src={close} alt="" />
          <img src={pizza} alt="" />
          <S.InfosContainer>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <S.BotaoModal>Adicionar ao carrinho - R$ 60,90</S.BotaoModal>
          </S.InfosContainer>
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </S.ContainerCardapio>
  )
}

export default Cardapio
