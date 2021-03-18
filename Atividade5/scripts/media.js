const NUMERO_DE_ATIVIDADES = 3;     //Quantidade de notas para computar
const MEDIA = 6;                    //Nota mínima para aprovação

const notas = [];
const nomeAluno = prompt("Informe o nome do aluno:");

for(let i = 0; i < NUMERO_DE_ATIVIDADES; i++){
    notas[i] = parseFloat(prompt(`Informe a nota da atividade ${i + 1}:`));
}

const notaFinal = (notas.reduce((total, nota) => total + nota) / NUMERO_DE_ATIVIDADES).toFixed(1);

alert(`A nota final do(a) aluno(a) ${nomeAluno} foi ${notaFinal}\nSituação: ${notaFinal >= MEDIA ? 'APROVADO(A)' : 'REPROVADO(A)'}`);