# setTimeout()

## setTimeout() + Revisando o event loop
O `setTimeout()` é um método do window que irá me ajudar a criar eventos  
assíncronos no JavaScript além da utilização do `addEventListener`.  

O `addEventListener` cria eventos para mim mas, o `setTimeout()` irá me ajudar  
também a fazer alguns eventos assíncronos, sendo utilizado como temporizador.  

Tenho meu index.html apenas com o script no body:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Ninja</title>
</head>

<body>

    <script src="js/main.js"></script>

</body>

</html>
```

Como o window é um objeto global, posso chamar ou `window.setTimeout()` ou  
apenas `setTimeout()`.  

O `setTimeout()` basicamente **recebe dois parâmetros**: **uma function** de  
callback que será executada e o segundo parâmetro é **um tempo** em  
milisegundos (1000 milisegundos significa 1 segundo):

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    console.log('início');

    setTimeout(function() {

        console.log('executou setTimeout');

    }, 1000);

    console.log('fim');

})(window, document);
```

O que vai acontecer é que, depois de iniciar a minha aplicação, quando o  
JavaScript começar a fazer a leitura do meu código e chegar no `setTimeout`,  
**um segundo depois de ele fazer a leitura**, o `console.log` será executado.  

Isso faz com que eu entenda a natureza assíncrona do JavaScript. O JavaScript  
faz a leitura e executou o `console.log('início');` e, como o `setTimeout`  
é um método que faz um retorno assíncrono, o JavaScript colocou a função de  
callback desse método no **event loop (segunda thread)**. O JavaScript fez  
a leitura do código do `setTimeout`, jogou no **event loop** e ele ficou  
rodando lá. 1 segundo depois, o **event loop** jogou o código de volta para  
a thread principal e executou o `console.log('executou setTimeout');`.

Se eu usasse um `for` ou qualquer outro método que fizesse uma leitura  
síncrona, e bloqueasse a thread, o que iria acontecer é: ele iria mostrar o  
'início', iria esperar 1 segundo para mostrar a frase dentro do `setTimeout`  
e só depois iria mostrar o 'fim'.

## setInterval()
É um outro método assíncrono do JavaScript, além do eventListener e do  
setTimeout.  

O `setTimeout` executa apenas uma vez, assim que o código é rodado. O  
`setInterval()` funciona de forma parecida mas, a única diferença é que o  
`setInterval()` não para. Ele fica rodando infinitamente e, a cada 'x' tempo,  
ele fica jogando a função de callback no **event loop**.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    setInterval(function() {

        console.log('executou setInterval');

    }, 1000);

})(window, document);
```

Mudei o `setTimeout` para `setInterval` e agora, a cada um segundo, o código  
da função de callback é executado. Neste caso, ele irá mostrar 'executou  
setInterval' no console até que eu recarregue ou saia da página.  

Se eu especificar que eu quero que, a cada 100 milisegundos ele coloque a  
função de callback no event loop, ele irá rodar bem mais rápido.

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    setInterval(function() {

        console.log('executou setInterval');

    }, 100);

})(window, document);
```

O problema do `setInterval()` e do `setTimeout()` é que, o `setInterval()`  
irá colocar, a cada 100 milisegundos, a função de callback dentro do event  
loop, o que **não significa** que, após exatos 100 milisegundos ela será  
executada. Na verdade, significa que, a cada 100 milisegundos, a função **será  
colocada na Event Queue**. E colocar muitas coisas na Event Queue também pode  
deixar minha aplicação lenta. Não travou o navegador agora por que estou  
usando apenas um `console.log()`, que é um comando básico, simples.  

## setTimeout() sendo executado várias vezes repetidas
```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    setTimeout(function() {

        console.log(counter++);

    }, 1000);

})(window, document);
```

Fazer apenas isso fará com o valor do counter seja logado após 1 segundo e  
depois disso a variável counter é incrementada.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    function timer() {

        console.log('timer', counter++);
        setTimeout(timer, 1000);
    }

    timer();

})(window, document);
```

Acima, criei uma função e, dentro dela, especifiquei que o `setTimeout` irá  
executar a própria função a cada 1 segundo.  

Também fiz um `console.log()` mostrando a string 'timer' e o valor de  
'counter' com pós incremento.  

A `counter` deve ser criada fora da função pois, se ela ficar dentro, sempre  
será iniciada com o valor da declaração (0, no caso).  

Após a declaração da função, irei invocá-la.  

Ou seja, quando ela for executada, 'timer' e o valor de 'counter'  
incrementada será mostrado no console e depois de um segundo, a função timer  
será executada novamente. E assim, repetidamente.  

[![counter.png](https://s25.postimg.org/fsrry5i9r/counter.png)](https://postimg.org/image/eqhlflzgb/)

A cada um segundo, é mostrado no console o valor de `counter++`.  

Ou seja, um `setTimeout` recursivo*.  

*Recursão: fazer com que um método ou uma função chame a si própria.*  

Mas a recursão tem um problema, ele irá executar a função ou o método  
infinitamente, até que eu recarregue a tela ou saia dela.  


### Pausando uma função recursiva dentro do temporizador `setTimeout`
Uma função recursiva tem duas premissas:
1. Invocar a si mesma.
2. Ter uma condição para pausá-la.

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    function timer() {

        console.log('timer', counter++);

        if(counter > 10)
            return;

        setTimeout(timer, 1000);
    }

    timer();

})(window, document);
```
Então, estou dizendo que, assim que eu executar a função:
1. Mostro o `console.log()` com o valor de counter;
2. Se o 'counter' for maior que 10, faço um `return` sem mostrar nada. Como  
estou usando o `return`, se o `if` for verdadeiro, ele irá ignorar o  
`setTimeout`.
3. Se o `if` não for verdadeiro, ele irá ler o `setTimeout` e, depois de um  
segundo, executará novamente a função `timer`.  

Então, isso tem que parar após 10x que ele executar a função `timer`.  

Funcionou. Ou seja, ele entrou no `if` com o `return` e parou de adicionar a  
função no event loop. Uma função recursiva sempre deve ter essa avaliação de  
quando ela deve ser pausada.  

Relembrando: o `if` de uma única linha não necessita de chaves.  

Mais à frente será mostrado como, onde e por que utilizar funções recursivas.  
