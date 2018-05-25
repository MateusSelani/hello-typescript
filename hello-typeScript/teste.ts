interface Pessoa {
    primeiroNome: string;
    segundoNome: string;
}
function funcaoNomeCompleto(pessoa: Pessoa) {
    return "Olá, "+ pessoa.primeiroNome +" "+ pessoa.segundoNome;
}

let cliente = {primeiroNome: "Mateus", segundoNome: "Selani"};

console.log(funcaoNomeCompleto(cliente));
