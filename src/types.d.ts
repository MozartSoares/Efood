declare type Prato = Restaurante['cardapio'][0]
declare type Restaurante = {
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
declare type RootReducer = ReturnType<typeof store.getState>
