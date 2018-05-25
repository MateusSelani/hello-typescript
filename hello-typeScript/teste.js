function funcaoNomeCompleto(pessoa) {
    return "Olá, " + pessoa.primeiroNome + " " + pessoa.segundoNome;
}
var cliente = { primeiroNome: "Mateus", segundoNome: "Selani" };
console.log(funcaoNomeCompleto(cliente));
