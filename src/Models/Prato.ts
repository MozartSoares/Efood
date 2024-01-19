class Prato {
  foto: string
  nome: string
  descricao: string
  id: number
  constructor(titulo: string, descricao: string, imagem: string, id: number) {
    this.id = id
    this.descricao = descricao
    this.foto = imagem
    this.nome = titulo
  }
}

export default Prato
