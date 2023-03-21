class Produto{
    nome: string
    preco: number
    desconto: number
    constructor(nome: string, preco: number, desconto: number = 0){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}

var teste = new Produto("luan", 199)

console.log(teste)


