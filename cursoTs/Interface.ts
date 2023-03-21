interface Humano {
    nome:string
    idade?:number
    [prop:string]:any
    saudar?(sobrenome: string) : void
}

function saudarComOla(pessoa:Humano){
    console.log("Ola " + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Lucas'
}

const pessoa = {
    nome: "luan",
    idade: 23,
    saudar(sobrenome: string){
        console.log("Saudar é " +this.nome +" "+sobrenome)
    }
}

// saudarComOla(pessoa)
// mudarNome(pessoa)
// saudarComOla({nome:"Luiz", idade: 23, aaaa:true})
// pessoa.saudar("Diego")

class Cliente implements Humano {
    nome: string = ""
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log("Saudar é "+this.nome+" "+sobrenome)
    }
}


const meuCliente = new Cliente()
meuCliente.nome = "Carlos"
// saudarComOla(meuCliente)
// console.log(meuCliente.ultimaCompra)

interface FuncaoCalculo {
    (a:number, b:number):number
}

let potencia: FuncaoCalculo

potencia = function(base:number, exp:number):number{
    return base**exp;
}

// console.log(potencia(3,10))

// Herança

interface A {
    a():void
}
interface B{
    b():void
}
interface ABC extends A, B{
    c():void
}

class classA implements A{
    a():void {}
}

class classAB implements A, B{
    a():void{}
    b():void{}
}

