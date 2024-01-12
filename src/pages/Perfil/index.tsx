import Cardapio from '../../Cardapio'
import BannerPerfil from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import Prato from '../../Models/Prato'
import pizza from '../../assets/images/pratoPizza.png'

const PratosTrattoria: Prato[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 2,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 3,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 5,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 6,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <BannerPerfil />
    <Cardapio pratos={PratosTrattoria} />
  </>
)

export default Perfil
