class Prato {
  imagem: string
  titulo: string
  descricao: string
  id: number
  constructor(titulo: string, descricao: string, imagem: string, id: number) {
    this.id = id
    this.descricao = descricao
    this.imagem = imagem
    this.titulo = titulo
  }
}

export default Prato
