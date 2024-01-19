import { useEffect, useState } from 'react'

import ProfileList from '../../components/ProfileList'
import Header from '../../components/HeaderHome'

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
  const [Restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])
  return (
    <>
      <Header />
      <div className="container">
        <ProfileList profiles={Restaurantes} />
      </div>
    </>
  )
}

export default Home
