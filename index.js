/*Nome: João Pedro Estevão Louback */

/* Questão 1 
Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.*/

var numeroPrimo = (num) => {
    for (var i = 2; i < num; i++)
      if (num % i === 0) {
        return "Não é  número primo";
      }
    return num > 1, "É número primo";
  };

// Lista todos os numeros primos de 1 a 1000.

  function conjuntoPrimos() {
    var primosLista = [];
  
    for (let i = 2; i <= 1000; i++) {
      if (numeroPrimo(i) === "É número primo") {
        primosLista.push(i);
      }
    }
    return primosLista;
  }

var primos = conjuntoPrimos();


/*---TESTES  QUESTÃO 1---*/

// Testar se o número 25 é primo.
resultado = numeroPrimo(25);
// Mostra todos os numeros primos de 1 a 1000.
console.log(primos);


/* Questão 2 
Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.*/
  
  function criarSenha() {
    var senha = prompt("Insira a senha:");
  
    if (senha.length < 8) {
      alert("Invalida: deve conter no minimo 8 caracteres");
    } else if (!/[A-Z]/.test(senha)) {
      alert("Invalida: deve conter uma letra maiuscula");
    } else if (!/[a-z]/.test(senha)) {
      alert("Invalida: deve conter uma letra minuscula");
    } else if (!senha.match(/[0-9]/)) {
      alert("Invalida: deve conter um numero");
    } else {
      alert("A senha é valida: pode ser criada!");
    }
  }




/*---TESTES QUESTÃO 2---*/

// Chamando a função para testar.
criarSenha();




/* Questão 3 
Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.*/
  
  function encontrarFatorial(num) {
    if (num == 0) {
      return 1;
    } else if (num > 10) {
      return "insira numeros de 1 a 10";
    } else {
      return num * encontrarFatorial(num - 1);
    }
  }
  
  var fatoriais = [];
  for (var i = 1; i <= 10; i++) {
    fatoriais.push(encontrarFatorial(i));
  }




/*---TESTES QUESTÃO 3---*/

//Mostra todos os numeros fatoriais de 1 a 10.
console.log(fatoriais);

//Mostra o fatorial do numero 5 que é 120.
console.log(encontrarFatorial(5));



/* Questão 4 
Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.*/
  
  function quadradoPerfeito(numero) {
    var raizNumero = Math.floor(Math.sqrt(numero));
    return raizNumero * raizNumero === numero;
  }
  
  var num = prompt("Insira um número para verificação");
  
  num = parseInt(num);
  
  if (quadradoPerfeito(num)) {
    console.log(num + " é um quadrado perfeito.");
    alert("é um quadrado perfeito.");
  } else {
    console.log(num + " não é um quadrado perfeito.");
    alert("não é um quadrado perfeito.");
  }


/*---TESTES QUESTÃO 4---*/

/* O teste ja funcionca após rodar a função aparece um prompt, você digita o numero e retornara se é um quadrado perfeito ou não. */

// Ou teste usando o "console.log" se o numero 4 é um quadrado perfeito.
console.log(quadradoPerfeito(4));

// a mensagem de resposta sera true ou false.