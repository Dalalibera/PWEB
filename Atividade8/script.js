const aluno1 = {
    'ra' : 0030481923033,
    'nome' : "Giovanne Dalalibera"
}

const aluno2 = (function(){
    return {
        'ra' : 0030481923033,
        'nome' : "Giovanne Dalalibera"
    }
}())

const aluno3 = {}
aluno3.ra= 0030481923033;
aluno3.nome= "Giovanne Dalalibera";

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);