const maior = (a, b, c) => a > b && a > c ? a : b > c ? b : c;

const a = parseFloat(prompt("Informe o primeiro número"));
const b = parseFloat(prompt("Informe o segundo número"));
const c = parseFloat(prompt("Informe o terceiro número"));

alert(`O maior número informado foi ${maior(a, b, c)}`);