import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

import Perfil from '../../Models/Perfil'
import ProfileList from '../../components/ProfileList'
import Header from '../../components/HeaderHome'

const ListaHome: Perfil[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    imagem: sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    imagem: trattoria,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    rating: '4.6'
  },
  {
    id: 3,
    titulo: 'Hioki Sushi',
    imagem: sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  },
  {
    id: 4,
    titulo: 'Hioki Sushi',
    imagem: sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  },
  {
    id: 5,
    titulo: 'Hioki Sushi',
    imagem: sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  },
  {
    id: 6,
    titulo: 'Hioki Sushi',
    imagem: sushi,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: '4.9'
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <ProfileList profiles={ListaHome} />
    </div>
  </>
)

export default Home
