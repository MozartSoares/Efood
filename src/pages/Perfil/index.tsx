import { useParams } from 'react-router-dom'

import Cardapio from '../../components/Cardapio'
import BannerPerfil from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useGetRestaurantPageQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantPageQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil
        imagem={restaurante.capa}
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <Cardapio cardapio={restaurante.cardapio} />
    </>
  )
}

export default Perfil
