# Sync vs. Async  
Nesta aula iremos entender **como é** a natureza Assíncrona do JS, **por quê  
é** assíncrona e **o que é** Assíncrono.

Tenho abaixo o meu index.html, com apenas o `script` do JavaScript incluso  
no body.

```JAVASCRIPT
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

Vou então criar um script, com minha `IIFE` e o `use strict`:

```JAVASCRIPT

(function() {

    'use strict';



})();

```

## sync
Em uma plataforma síncrona, quando eu tenho um evento, ou um comando, ou algo  
que está acontecendo no meu programa, um comando acontece após o outro.

```JAVASCRIPT
(function() {

    'use strict';

    console.log(1);
    console.log(2);
    console.log(3);

})();
```

Então, se eu incluo, por exemplo, `console.log`'s no meu script, eu sei que,  
eles serão executados de um após o outro, ou seja, de forma **síncrona**.  
Então, a ordem que será mostrada no console para mim, é exatamente essa: vou  
ver o número 1, depois o número 2, depois o número 3.

[![sync.png](https://s26.postimg.org/yt79iz7pl/sync.png)](https://postimg.org/image/eyl7wushx/)

Isso acontece por que eu sei que o `console.log` é um comando síncrono.  

O JS trabalha somente com uma **Thread**. Isso significa que, por exemplo:  
tenho o meu pc com um processador de 4 núcleos e, um desses núcleos está  
executando a **Thread** do navegador com o JavaScript.  

Como o JavaScript não roda em mais de uma Thread, ele precisa executar os  
comandos um após o outro e, se houver um comando que bloqueie todo o  
conteúdo ou qualquer tipo de ação nessa Thread, essa Thread ficará completamente  
bloqueada.  

Um exemplo disso é:

```JAVASCRIPT
(function() {

    'use strict';

    console.log(0);

    for(var i = 1; i <= 10; i++) {

        console.log(i);
    }

    console.log(11);

})();
```

Primeiro ele irá me mostrar o `0`, em seguida, ele irá fazer a iteração do  
`for` e me mostrar os números de `1` a `10` e, quando ele finalizar o `for`,  
ele irá me mostrar o número `11`. Ou seja, o JavaScript manteve a sequência,  
não pulou a ordem dos comandos:

[![log.png](https://s26.postimg.org/rwd36gbex/log.png)](https://postimg.org/image/p29xt098l/)

O problema é quando eu faço isso:
```JAVASCRIPT
(function() {

    'use strict';

    console.log(0);

    for(var i = 1; i <= 1000; i++) {

        console.log(i);
    }

    console.log(11);

})();
```

Ou seja, quando eu faço uma iteração com `1000` itens, ele demora um pouco mais  
para executar.

Se eu faço uma iteração com `10000` itens:
```JAVASCRIPT
(function() {

    'use strict';

    console.log(0);

    for(var i = 1; i <= 10000; i++) {

        console.log(i);
    }

    console.log(11);

})();
```

Ele faz a iteração aos poucos e demora bem mais para finalizá-la.  

Isso acontece por que isso é um **evento síncrono** que consome muito do  
navegador. Até a barra de rolagem do console está travando, conforme o scroll.  

O problema fica muito maior quando eu escrevo todos os meus métodos assíncronos  
em uma grande aplicação usando JavaScript. Todo o acesso do usuário fica  
bloqueado. Se houver um input, por exemplo, o usuário não conseguirá  
preenchê-lo.  

Um exemplo, usando um texto:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Ninja</title>
</head>

<body>

    <p>Conteúdo do meu parágrafo</p>

    <script src="js/main.js"></script>

</body>

</html>
```

Eu simplesmente adicionei um parágrafo no meu `HTML`. Quando atualizo a tela,  
não irei conseguir selecionar o texto enquanto o JS não terminar as `10000`  
iterações do `for`.  

Isso acontece por que o for é um método síncrono no JavaScript. Ele bloqueia  
as ações enquanto estiver fazendo as iterações. Ele não libera a Thread  
enquanto estiver fazendo as iterações.

## Async
A maior parte dos comandos em JS funciona de forma **assíncrona**. Eventos são  
um exemplo de assincronismo. Ou seja, eu preciso aguardar uma ação do usuário.  
Um temporizador na tela também é um exemplo de um comando assíncrono.  

### Event Loop  
O JavaScript tem algo chamado event loop.

[![event_loop.png](https://s25.postimg.org/hm3euqe6n/event_loop.png)](https://postimg.org/image/prlgsw2ff/)

Posso imaginar o **event loop** é um círculo que fica rodando em uma Thread separada  
e, no lado direito (retângulo) tenho a Thread principal (**Thread Pool**). A thread  
principal está executando meus arquivos, meu site, tem o formulário para o  
usuário preencher... tudo na thread principal.  

Quando eu crio um processo síncrono, ele fica sendo executado na thread  
principal e, automaticamente, se esse processo síncrono demora muito tempo ele  
irá, automaticamente, bloquear a thread e não deixar o usuário fazer algo,  
enquanto o processo síncrono estiver em execução.  

Foi visto que, quando eu crio um listener de evento para algum elemento do DOM  
o JavaScript simplesmente pega aquele listener, coloca em uma fila (**Event  
Queue**) e essa fila fica no **event loop**. Ou seja, essa fila fica girando  
dentro do **event loop** e os items da fila ficam girando no event loop na  
ordem em que eles foram adicionados. Eles ficam girando nessa **segunda thread**  
e a **thread principal** fica liberada. Se isso não acontecesse, ou seja, se ao  
adicionar um novo evento em um elemento ele não fosse assíncrono, a thread iria  
ficar bloqueada, a tela iria ficar bloqueada, até que o usuário fizesse alguma  
ação.

```JAVASCRIPT
(function() {

    'use strict';

    console.log('início');

    document.addEventListener('click', function() {

        console.log('clicou no documento');

    }, false);

    console.log('fim');

})();
```

Se eu fizer isso e, executar a página, o JavaScript executa os  
`console.log('início');` e `console.log('fim');` mas, não executa o  
`console.log('clicou no documento');` por que, quando adicionei o listener de  
evento no document, esse evento foi para o **event loop**. Ou seja, **ele está em  
uma segunda thread**, separada da thread principal que está sendo executada no  
browser. E quando eu clico no documento, aí sim ele executa o  
`console.log('clicou no documento');`. Isso é a natureza assíncrona do  
JavaScript.

Ou seja, esse evento foi jogado em uma fila do event loop e o event loop fica  
ouvindo esse evento. Quando eu faço a ação naquele evento (click no document),  
o event loop joga a função de callback para a minha thread principal e a  
executa.  

Ou seja, quando eu coloco o listener de evento, ele cai nessa **segunda thread**  
(event loop) e fica rodando nele até que eu faça a ação do evento.  

Isso acontece com qualquer evento assíncrono que eu criar.  

Em breve, será visto algumas formas melhores de trabalhar com o assincronismo  
no JavaScript, para que a thread não fique bloqueada quando eu tiver muita  
informação para tratar e eu não tratar diretamente na thread principal. Será  
mostrado como eu posso tratar essa informação aos poucos e como eu faço para  
utilizar melhor o event loop do JavaScript.
