import ProfileList from '../../components/ProfileList'
import Header from '../../components/HeaderHome'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurante = {
  infos: string[]
  imagem: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <div className="container">
          <ProfileList profiles={restaurantes} />
        </div>
      </>
    )
  }
  return <h4>carregando...</h4>
}

export default Home
