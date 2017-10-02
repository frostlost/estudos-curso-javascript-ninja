# Revisão do desafio da semana #21 - Parte 1

```JAVASCRIPT
/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
```

## 1. Crie um arquivo index.html e adicione esse script a ele
```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 21</title>
</head>
<body>

    <script src="challenge-21.js"></script>

</body>
</html>
```

## 2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero). Ele será o nosso cronômetro

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 21</title>
</head>
<body>

    <input type="text" value="0">

    <script src="challenge-21.js"></script>

</body>
</html>
```

## 3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 21</title>
</head>
<body>

    <input type="text" value="0">
    <button>Start</button>
    <button>Stop</button>
    <button>Reset</button>

    <script src="challenge-21.js"></script>

</body>
</html>
```

## Utilize o atributo data-js para nomear o campo e os botões. Você pode usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 21</title>
</head>
<body>

    <input data-js="timer" type="text" value="0">
    <button data-js="start">Start</button>
    <button data-js="stop">Stop</button>
    <button data-js="reset">Reset</button>

    <script src="challenge-21.js"></script>

</body>
</html>
```
O nome dos botões são exatamente o que eles irão fazer: iniciar, parar e  
resetar o cronômetro.  

O html do exercício está concluído.

## 4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a cada segundo
Para que quando eu clique, o botão faça uma ação, preciso colocar um listener  
de evento. Como eu vou precisar do `input` para passar o novo valor para ele,  
vou precisar dos botões `start`, `reset` e `stop` para fazer as ações deles,  
irei colocá-los em variáveis:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');

})(window, document);
```

Eu sei que para eu fazer o `stop` e o `start` irei precisar parar o contador que  
será incrementado de 1 em 1. Então, irei adicionar uma variável `interval` que  
não irá receber nada, por enquanto. Ela irá fazer os meus intervalos.

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

})(window, document);
```

Agora irei setar as ações de cada item. Ao invés de criar funções anônimas como  
parâmetros para o `addEventListener`, posso criar funções separadas e apenas  
chamá-las, sem invocá-las. Se eu invocar a função no parâmetro do  
`addEventListener`, ela será executada quando a linha do `addEventListener` for  
lida. Se eu apenas passo a referência da função, sem invocá-la, a função será  
invocada só no momento do clique:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);

    function startTimer() {

    }

})(window, document);
```
