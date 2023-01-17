class Veiculos {
    modelo: string
    rodas: number
    constructor(modelo: string, rodas: number) {
        this.modelo = modelo
        this.rodas = rodas
    }
}

let toyota = new Veiculos("10", 10)

console.log(toyota.modelo, toyota.rodas)

toyota.modelo = "corola"

console.log(toyota.modelo, toyota.rodas)

class Motos extends Veiculos {
    constructor Motos(modelo: string, rodas: number)
        super(modelo, rodas)
    }

let kawasaki = new Motos("5", 2)

console.log(kawasaki instanceof Veiculos, kawasaki.modelo, kawasaki.rodas)