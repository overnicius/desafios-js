/*ENUNCIADO 2: calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x

Uso da função:

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

*/



function calcMetragem(n1, n2) {
	let preco = 3.000;

if(n2 === 1) {
	return n1 * preco;
} else if(n2 === 2){
	return n1 * (preco*1.2);
	
} else {
	return n1 * (preco*1.5);
}

}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);