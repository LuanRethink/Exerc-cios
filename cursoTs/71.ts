class Carro {
    private velocidadeAtual: number = 0;
    constructor(public marca:string, public modelo:string, private velocidadeMaxima: number = 200){

    }
    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade<=this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0
        }
        return this.velocidadeAtual
    }
    public acelerar(): number{
        return this.alterarVelocidade(5)
    }
    public freiar(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro = new Carro('Wolkswagen', 'Saveiro', 512)
carro.acelerar()
console.log(carro)

