import { useParams } from 'react-router-dom'

import Cardapio from '../../Containers/Cardapio'
import BannerPerfil from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useGetRestaurantPageQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantPageQuery(id!)

  return (
    <>
      <HeaderPerfil />
      {restaurante ? (
        <>
          <BannerPerfil
            imagem={restaurante.capa}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
          />
          <Cardapio cardapio={restaurante.cardapio} />
        </>
      ) : (
        <h4>carregando...</h4>
      )}
    </>
  )
}

export default Perfil
