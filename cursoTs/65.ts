class Data {
    dia: number
    public mes: number
    ano: number
    constructor(dia: number = 1, mes: number =1, ano: number=1){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }
}

const aniversario = new Data(5,5,1999)
const niverB = new Data // caso seja inicializado no constructor pode chamar a data sem passar parametro


class DataEsperta {
    constructor(public dia: number = 1, public mes: number =1, public ano: number=1){
      //funciona sem por causa do public?
    }
}