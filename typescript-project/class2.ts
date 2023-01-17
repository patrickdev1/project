class Pilha {
    dados: string[] = []
    Insert(dado: string) {
        this.dados.push(dado)
    }
    Remove() {
        this.dados.pop()
    } 
    Peek()  {
        if (this.dados.length) {
            return this.dados[this.dados.length-1]
        }
        return "Não existem dados nessa pilha." 
    }
    Size() {
        return this.dados.length
    }
    isEmpty() {
        if (this.dados.length == 0) {
            return true
        }
        return false
    }
}

var pilha = new Pilha()
console.log(pilha.Size())