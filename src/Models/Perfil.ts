class Perfil {
  descricao: string
  imagem: string
  rating: string
  infos: string[]
  titulo: string
  id: number

  constructor(
    titulo: string,
    rating: string,
    descricao: string,
    infos: string[],
    imagem: string,
    id: number
  ) {
    this.id = id
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
    this.titulo = titulo
    this.rating = rating
  }
}

export default Perfil
