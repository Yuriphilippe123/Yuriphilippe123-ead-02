function calculadora() {
    
    var n1 = parseInt(prompt('Informe o primeiro número: '));
    var n2 = parseInt(prompt('Informe o segundo número: '));

    var soma = n1 + n2 ;
    var subtrair = n1 - n2;
    var multiplicar = n1 * n2;
    var divisao = n1 / n2;
    var resto = n1 % n2;

    alert ('A soma dos numéros é :' + soma + '\n' +
     'A subtração dos numéros é :' + subtrair + '\n' +
     'A multiplicação dos numéros é :' + multiplicar + '\n' +
     'A divisão dos numéros é : ' + divisao + '\n' +
     'O resto da divisão é : '  + resto) 

    alert ('Obrigado por usar nossa ferramenta!') 
  }

