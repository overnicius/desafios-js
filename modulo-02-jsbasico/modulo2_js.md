🧠 Módulo 2 - Funções em JavaScript (Aula 1 a 9)

📌 O que é uma função?
Uma função é como uma máquina de fazer alguma coisa específica. Você dá um comando (entrada), ela executa (processa), e te devolve algo (saída). Em JS, usamos funções para organizar nosso código em blocos reutilizáveis.

💡 Exemplo prático: mudar a cor de um texto ao clicar num botão

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="texto">OLÁ MUNDO</h1>
    <button class="botao" onclick=trocaCor()>TROCA DE COR</button>
    <script>
        function trocaCor(texto){
        let botao = document.querySelector(".botao");
        let text = document.querySelector('#texto')
        botao.addEventListener('click', () =>{
            text.style.color='blue'
        })
    }
    </script>
</body>
</html>

📌 Correção importante: Estava adicionando um addEventListener dentro da função trocaCor, sendo que já havia chamado a função no onclick. Isso geraria um comportamento duplicado se clicado várias vezes. Abaixo a versão corrigida:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Função JS</title>
</head>
<body>
  <h1 id="texto">OLÁ MUNDO</h1>
  <button class="botao" onclick="trocaCor()">TROCAR COR</button>

  <script>
    function trocaCor() {
      const texto = document.querySelector('#texto');
      texto.style.color = 'blue';
    }
  </script>
</body>
</html>



📌 camelCase
Funções geralmente seguem o padrão camelCase, onde a primeira palavra é minúscula e as próximas começam com maiúscula, como trocaCor, validaLogin, etc. Isso facilita a leitura e entendimento do código.

🧠 Funções com parâmetros
Funções podem receber dados de fora, chamados de parâmetros, para trabalhar com diferentes situações sem reescrever o código:

function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log(resultado);
}

somar(1, 2); // 3
somar(3, 5); // 8
🔁 Analogia: pense numa calculadora. Você aperta dois números e o botão de soma (=), e ela retorna o resultado. A calculadora (função) não muda, só os números mudam (parâmetros).

📤 Return: o coração da função

function somar(n1, n2) {
  return n1 + n2;
}

let total = somar(10, 5);
console.log(total); // 15

📌 O return entrega o resultado da função para fora dela. A partir desse valor, você pode guardar em uma variável, usar em outra função, etc.
🚨 Tudo que vier depois do return dentro da função será ignorado.
🛠️ Extra: boas práticas com funções
Nomeie funções de forma clara, como calcularDesconto, formatarNome, etc.
Uma função deve fazer uma coisa só.

