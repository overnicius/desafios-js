/*ENUNCIADO: Crie uma função que valide usuário e senha.
Usuário correto: Pedro
Senha correta: 123

Uso da função:

let user = 'Vinicius';
let senha = '1234';
let valida = validar(user, senha);
if(valida) {
 console.log('Acesso concedido.');
} else {
	console.log('Acesso Negado!');
}

*/


function validar(user, senha){
 if(user === 'Pedro' && senha === '1234') {
 return true; }
else { return false}
 }

let user = 'Vinicius';
let senha = '1234';
let valida = validar(user, senha);
if(valida) {
 console.log('Acesso concedido.');
} else {
	console.log('Acesso Negado!');
}


