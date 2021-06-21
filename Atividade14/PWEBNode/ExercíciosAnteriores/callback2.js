function exibeMensagensNaOrdem(message, callback) {
    console.log(message);
    callback();
}

exibeMensagensNaOrdem('Primeira mensagem exibida na ordem', function() {
    console.log('Segunda mensagem exibida na ordem');
});