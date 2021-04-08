const maior = (a, b, c) => a > b && a > c ? a : b > c ? b : c;

let a, b, c;

do{
    a = parseFloat(prompt("Informe o primeiro número:"));
    if (isNaN(a)){
        alert("Entrada inválida!");
    }
}while(isNaN(a))

do{
    b = parseFloat(prompt("Informe o primeiro número:"));
    if (isNaN(b)){
        alert("Entrada inválida!");
    }
}while(isNaN(b))

do{
    c = parseFloat(prompt("Informe o primeiro número:"));
    if (isNaN(c)){
        alert("Entrada inválida!");
    }
}while(isNaN(c))

alert(`O maior número informado foi ${maior(a, b, c)}`);