import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Cardapio from '../../components/Cardapio'
import BannerPerfil from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import { Restaurante } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

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
