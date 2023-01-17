/* function exe2(A: number, B: number, C: number) {
    var R = (A + B)^2
    var S = (B + C)^2
    var D = ((R + S) / 2)
    console.log("O resultado da expressão é:" ,D)
}

exe2(3, 2, 1) */


/* function exe3(idadeAnos: number, idadeMeses: number, idadeDias: number) {
    var idadeGeral: number | string = idadeAnos + "Anos"; idadeMeses + "Meses"; idadeDias + "Dias"
    var ageinDays = idadeAnos * 365
    var monthinDays = idadeMeses * 30
    var daysConverted = ageinDays + monthinDays + idadeDias
    console.log ("A idade expressa em dias é:" ,daysConverted)
}

exe3(20, 8, 10) */

/* function exe4(idadeDias: number) {
    var idadeAnos = idadeDias / 365
    var idadeMeses = idadeDias / 30
    var idadeGeral: number | string = idadeAnos + "Anos"; idadeMeses + "Meses"; idadeDias + "Dias"
    console.log ("A idade expressa é:" ,idadeGeral)
}

exe4(8000) */

/* function exe10(notas: number[]) {
    let soma = notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    var media = (soma / notas.length)
    if (media >= 6) {
        console.log("Aprovado")
    }
    else {
        console.log("Reprovado")
    }
}

exe10([8, 5, 3]) */

/* function exe15(numero: number) {
    if (numero % 2 == 0) {
    console.log("O número é par")
    }
    else {
        console.log("O número é ímpar")
    }
}

exe15(24) */

/* function exe17(h: number, gender: string) {
    gender = "male" || "female"
    if (gender = "male") {
        var pesoIdealM = (72.7 * h) - 58
        console.log("O seu peso ideal é:" ,pesoIdealM)
    }
    else {
        var pesoIdealF = (62.1 * h) -44.7
        console.log("O seu peso ideal é:" ,pesoIdealF)
    }
}

exe17(1.65, "female") */

/* function exe11 (a: number, b: number) {
    if (a % b == 0 || b % a == 0) {
        console.log("É múltiplo")
    }
    else {
        console.log("Não é múltiplo")
    }
}

exe11(15, 5) */

/* function exe12(idade: number | string) {
    let categoria = {
        infantilA: "5 - 7 anos",
        infantilB: "8 - 10 anos",
        juvenilA: "11 - 13 anos",
        juvenilB: "14 - 17 anos",
        adulto: "Maiores de 18 anos"
    }
    if (idade >= 5 && idade < 8) {
        console.log("",categoria.infantilA)
    }
    if (idade >= 8 && idade < 11) {
        console.log("",categoria.infantilB)
    }
    if (idade >= 11 && idade < 14) {
        console.log("",categoria.juvenilA)
    }
    if (idade >= 14 && idade < 18) {
        console.log("",categoria.juvenilB)
    }
    if (idade >= 18) {
        console.log("",categoria.adulto)
}
}

exe12(18) */

/* function exe20(code1: number, code2: number, code3: number, code4: number, code5: number) {
    var codeR1: number = 5
    codeR1 == code1
    var codeR2: number = 6
    codeR2 == code2
    var codeR3: number = 2
    codeR3 == code3
    var codeR4: number = 5
    codeR4 == code4
    var codeR5: number = 6
    codeR5 == code5
    let codeT = codeR1 + codeR2 + codeR3 + codeR4 + codeR5
    console.log("O preço total é:" ,codeT)
}

exe20(1001, 1324, 6548, 0987, 7623) */

