# setTimeout vs. setInterval
A diferença básica entre os dois é que, o `setTimeout()` executa apenas uma  
vez e o `setInterval()` executa várias vezes até que eu faça algo para pará-lo  
(em breve será mostrado como pará-lo).  

Também foi visto que posso usar o `setTimeout()` de uma forma recursiva mas,  
qual é a vantagem de utilizar o `setTimeout()` recursivo e utilizar o  
`setInterval`?

## setTimeout

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    function timer() {

        if(counter > 10)
            return;

        console.log('timer', counter++);

        setTimeout(timer, 1000);
    }

    timer();

})(window, document);
```

Isso loga no console para mim 10x aquele valor que eu pedi:
[![counter.png](https://s25.postimg.org/fsrry5i9r/counter.png)](https://postimg.org/image/eqhlflzgb/)

Quando o `setTimeout` for colocar um evento no event loop, ele diz que, 1  
segundo depois que ele executar o `setTimeout`, ele irá chamar a função `timer`.  
Como ele chama só uma vez, não importa se há alguma outra coisa rodando na  
thread que irá demorar mais que 1 segundo. Ele diz que, 1 segundo depois de  
rodar, ele irá executar o `setTimeout`. Se depois desse 1 segundo houverem  
coisas rodando, ele irá esperar essas outras coisas terminarem de rodar e,  
quando essas outras coisas terminarem, quando o timer for executado, aí sim ele  
entrará novamente na função `function timer()` e irá invocar novamente o  
`setTimeout(timer, 1000);`.  

Ou seja, o `setTimeout` só coloca na fila o próximo `setTimeout` quando aquele  
primeiro já foi executado.

Se eu incluir um parágrafo no index.html e executar o `setTimeout`, eu consigo  
trabalhar na thread tranquilamente, sem travar:
```HTML
<body>

    <p>Conteúdo do parágrafo</p>

    <script src="js/main.js"></script>

</body>
```

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    function timer() {

        console.log('timer', counter++);

        if(counter > 20)
            return;

        setTimeout(timer, 1000);
    }

    timer();

})(window, document);
```
[![thread.png](https://s25.postimg.org/6z0gll8z3/thread.png)](https://postimg.org/image/cafd6av1n/)

Eu consigo fazer isso por que o `setTimeout` é um evento assíncrono.

## setInterval
Também posso fazer algo similar utilizando o `setInterval()`:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;

    function timer() {

        console.log(counter++);
    }

    setInterval(timer, 1000);

})(window, document);

```

Com o `setTimeout` (segundo código acima), quando ele retorna nada, ele roda  
apenas uma vez.  

O problema com o `setInterval` é que ele irá rodar infinitamente enquanto eu  
não mandá-lo parar. O `setInterval` irá colocar o `timer` a cada 1 segundo no  
event loop. Então, se eu tiver milhões de coisas sendo executadas no meu código  
e essas milhões de coisas sendo executadas aleatoriamente (coisas síncronas  
junto com coisas assíncronas), o `setInterval`, ao ser chamado, ele irá dizer  
que o `timer` deve ser colocado a cada 1 segundo no event loop, independente  
se eu já o executei uma vez ou não.  

Ainda que eu pare o `setInterval` em algum momento, se essas funções de  
callback que o próprio `setInterval` colocou no event loop ainda estiverem lá,  
o event loop irá lançar na tela, a cada um segundo, essas funções colocadas no  
event loop pelo `setInterval`. Ele faz isso por que o `setInterval` executa  
várias vezes. Ou seja, ele será executado, no mínimo, 1x a cada 1 segundo.  

Já o `setTimeout` será executado 1x e, se ele for chamado novamente, irá ser  
executado de novo. Essa é a grande vantagem do `setTimeout` em relação ao  
`setInterval`.

**Devo usar o `setTimeout` recursivo no lugar do `setInterval` por questões de  
performace. O `setInterval` só deve ser usado para tempos maiores, como 1 minuto,  
por exemplo, em que eu preciso que aquilo fique repetindo várias vezes.**  

## O atributo data-js=""
Uma outra boa prática que devo começar a usar a partir de agora, para definir  
objetos, é o atributo `data-js""`.  

O HTML5 possui o atributo `data-` que eu posso utilizar com qualquer atributo  
depois dele (`data-roger`, `data-id`, `data-qualquercaracterealfanumerico`).  
Vou utilizá-lo por que, a utilização de `id`'s tem um certo problema, que será  
visto em breve. O `id` cria um elemento global que é uma referência àquele  
elemento.  

Já as `class` servem para estilo. O ideal é que eu as deixe só para o `CSS`,  
quando eu for estilizar o elemento.  

Quando eu for utilizar JavaScript, vou utilizar o `data-js=""` para nomear o item  
do DOM. É como se fosse um `id`. Ele não irá causar nenhum efeito colateral no  
browser.  

Sempre que eu utilizar o `data-`, vou estar utilizando-o no JavaScript.  
Dificilmente o `data-` será utilizado para estilizar. Então, eu **uso esse  
atributo para nomear os elementos que eu for manipular com o JavaScript**. 

![image](https://user-images.githubusercontent.com/29297788/33234507-0c4d5a04-d20f-11e7-9b2a-cad9a2f1235f.png)

## Métodos que param ou limpam o intervalo

### clearTimeout(id)
Serve exatamente para limpar o `setTimeout`, passando um `id` por parâmetro.  

Suponhamos que eu queira parar o timer antes do tempo.  

Vou colocar um botão no index.html:  

```HTML
<body>

    <button data-js="button">Parar cronômetro</button>

    <script src="js/main.js"></script>

</body>
```

E pegá-lo, no meu arquivo js. Também irei declarar uma variável 'temporizador'  
que não irá receber nada, por enquanto:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;

    function timer() {

        console.log('timer', counter++);

        if(counter > 20)
            return;

        temporizador = setTimeout(timer, 1000);
        console.log(temporizador);
    }

    timer();

})(window, document);
```

`temporizador = setTimeout(timer, 1000);`. Isso significa que, o `id` do  
`setTimeout` será a variável temporizador. Não há outra forma de saber o `id` do  
`setTimeout` se eu não atribuí-lo à uma variável (ele pode ter outros  
temporizadores na tela que eu não sei exatamente o número deles). Para que  
saber o número deles, a forma mais prática é atribuir o `setInterval` à uma  
variável:  

[![id_temporizador.png](https://s25.postimg.org/szpzthw27/id_temporizador.png)](https://postimg.org/image/uriyoefez/)

`timer 0` é o temporizador que está sendo criado.  
`1` é o `id` do temporizador.  

Quando eu crio um temporizador e atribuo o `setTimeout` para uma variável, essa  
variável irá receber o `id` do `setTimeout` e, eu posso limpar aquele timer em  
algum momento, atribuindo um evento ao button. Ao clicar no button, quero parar  
o temporizador:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;

    function timer() {

        console.log('timer', counter++);

        if(counter > 20)
            return;

        temporizador = setTimeout(timer, 1000);
    }

    timer();

    $button.addEventListener('click', function() {

        clearTimeout(temporizador);

    }, false);

})(window, document);
```

O `setTimeout` está dentro do código por que ele executa só uma vez, então  
sempre tenho que estar atribuindo-o ao temporizador para que ele gere um `id`  
novo a cada vez.  

Ou seja, quando eu clicar no botão, o temporizador irá receber o `id` do  
`setTimeout` e irá parar o `temporizador`. Ele irá deixar de executar o  
`setTimeout`:  

[![parar_cronometro.jpg](https://s25.postimg.org/68lz3zjun/parar_cronometro.jpg)](https://postimg.org/image/ee412583f/)

Ou seja, eu cancelei que a função fosse jogada no event loop, antes que ele  
chegasse a 20 iterações. Ele não irá mais colocar o `setTimeout` na fila.  

### clearInterval(id)
Serve exatamente para limpar o `setInterval`, passando um `id` por parâmetro.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;

    function timer() {

        console.log('timer', counter++);
    }

    temporizador = setInterval(timer, 1000);

    $button.addEventListener('click', function() {

        clearInterval(temporizador);

    }, false);

})(window, document);
```

Ao clicar no botão, ele para o meu temporizador:  

[![clearinterval.jpg](https://s25.postimg.org/4ysr2x03j/clearinterval.jpg)](https://postimg.org/image/juraaibi3/)
