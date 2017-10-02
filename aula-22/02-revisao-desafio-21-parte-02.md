# Revisão do desafio da semana #21 - Parte 2
## 4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a cada segundo (continuação)
Para pegar o valor do `input`, preciso do `.value`.

>Sempre digitar os termos e métodos ao invés de usar o autocomplete do Atom  
pois assim, a memorização fica mais fácil.  

Para incrementar o valor, já que eu já tenho o valor do input, vou fazer com que  
ele receba tudo o que ele tem (0, atualmente), mais 1, utilizando o incremento  
reduzido:

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

        $timer.value += 1;
    }

})(window, document);
```

Se eu fizer isso, a cada vez que eu clico no botão start, o número 1 é  
incluído no valor do input:
[![inclusao_1.jpg](https://s25.postimg.org/f44s1p2vz/inclusao_1.jpg)](https://postimg.org/image/gj6cqf3yz/)

Ou seja, **ele está concatenando** ao invés de somar.  

Para entender o que está acontecendo, se eu der um `console.log($timer.value)`,  
quando eu clico no `start` o console me mostra o 0:  

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

        console.log($timer.value);
    }

})(window, document);
```

[![zero.jpg](https://s25.postimg.org/tfsvk7cz3/zero.jpg)](https://postimg.org/image/vx4mrgwvf/)

Se eu fizer um `typeof` nesse valor, ao clicar no botão start, ele irá me  
mostrar o tipo desse valor:  

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

        console.log(typeof $timer.value);
    }

})(window, document);
```

[![typeof.jpg](https://s25.postimg.org/rqjsck53z/typeof.jpg)](https://postimg.org/image/m2dhlo0rf/)

É um valor do tipo `string`. Por isso, a cada vez que eu clico no botão start e,  
faço `$timer.value += 1;`, ao invés de ele somar, ele concatena pois, estou  
somando um `number` com uma `string`.  

Então, eu preciso converter o valor do input de `string` para `number` para  
depois somá-lo:  

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

        $timer.value = +$timer.value + 1;
    }

})(window, document);
```

### o operador `+` utilizado como unário

Quando utilizo o `+` como operador unário, antes de uma string e, essa `string`  
contém um valor numérico dentro dela, o JS automaticamente converte aquela  
`string` em `number`. Ou seja, fazendo isso, eu consigo converter o valor do  
input em `number` e somar `1`.  

Agora, cada vez que eu aperto o botão start, o valor do input é incrementado em  
+1:

[![incremento.jpg](https://s25.postimg.org/6kukvc1kf/incremento.jpg)](https://postimg.org/image/55t06m0h7/)

Ou seja, o valor do input continua sendo uma `string` mas, no momento em que eu  
estou fazendo a atribuição `+$timer.value + 1`, primeiro o valor é convertido em  
`number` e depois é somado `1` a ele.  

### Fazendo com que o valor do input seja incrementado a cada segundo
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

        $timer.value = +$timer.value + 1;
        setTimeout(startTimer, 1000);
    }

})(window, document);
```

A cada 1 segundo, chamo a função `startTimer()` e o valor do `input` será  
incrementado. Depois de 1 segundo, a função `startTimer()` será invocada  
novamente e assim sucessivamente.  

[![1em1.jpg](https://s25.postimg.org/lgxpgxhv3/1em1.jpg)](https://postimg.org/image/ve8q9zpgr/)

Agora, ao clicar no botão start, o valor do input é incrementado automaticamente  
a cada 1 segundo.

## 5. Ao clicar em Stop, o cronômetro deve parar de contar
Primeiro irei adicionar o evento ao botão que pára o cronômetro, passando uma  
função `stopTimer`:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        setTimeout(startTimer, 1000);
    }

})(window, document);
```

Então, irei criar a função `stopTimer`, que irá fazer um `clearTimeout` no `id`  
do `setTimeout`. A variável `interval`, inicialmente declarada sem atribuição,  
fará esse papel de `id`, recebendo o `setTimeout`. Fazendo isso, eu sei que o  
`stopTimer` irá parar de executar o meu timer quando eu clicar no botão 'stop':

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {

        clearTimeout(interval);
    }

})(window, document);
```

## 6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar
Então, irei criar um evento para o botão 'reset' e criar separadamente a função  
`resetTimer()` que o evento recebe por parâmetro.

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {

        clearTimeout(interval);
    }

    function resetTimer() {


    }

})(window, document);
```

A função `resetTimer()` irá fazer com que o `$timer.value` receba `0` e fazer um  
`clearTimeout` no `interval`:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {

        clearTimeout(interval);
    }

    function resetTimer() {

        $timer.value = 0;
        clearTimeout(interval);
    }

})(window, document);
```

## Duplicação de código e o uso de funções

Funcionou corretamente mas, eu estou duplicando o código `clearTimeout(interval)`  
sendo que eu já tenho uma função de parar o meu contador. Por que escrever  
novamente algo que eu já tenho no `stopTimer` e funciona? Então eu posso  
simplesmente invocar a função `stopTimer` dentro da `resetTimer` ao invés de  
duplicar código:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {

        clearTimeout(interval);
    }

    function resetTimer() {

        $timer.value = 0;
        stopTimer();
    }

})(window, document);
```

Em alguns casos, eu posso duplicar o meu código. Há alguns casos em que eu não  
posso chegar ao ponto de "remendar" apenas para não duplicar o código. Como no  
caso da criação dos eventos do código acima, por exemplo:  

```JAVASCRIPT
$start.addEventListener('click', startTimer, false);
$stop.addEventListener('click', stopTimer, false);
$reset.addEventListener('click', resetTimer, false);
```

Neste caso, estou chamando 3x a mesma coisa (`addEventListener`), claro que, para  
3 elementos diferentes porque eu tenho que chamar 3 funções diferentes.  

No caso da função `stopTimer` acima, eu posso, por exemplo, mudar a variável  
`interval` e fazer com que ele continue parando o timer, mas se eu faço uma  
duplicação de código como esta:  

```JAVASCRIPT
function stopTimer() {

    clearTimeout(interval);
}

function resetTimer() {

    $timer.value = 0;
    clearTimeout(interval);
}
```
Se eu mudar o nome da variável `interval`, vou ter que mudar o nome dela dentro  
da `function stopTimer()` e da `function resetTimer()`.

>Portanto, devo sempre ter isso em mente: sempre que eu for alterar alguma coisa  
e essa alteração ter que ser feita em 2 lugares diferentes, significa que o meu  
código já está escrito errado.

O `stopTimer` da `function resetTimer()` precisa fazer exatamente a mesma ação  [
de parar. Portanto, eu posso chamá-lo dentro da função.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $timer = doc.querySelector('[data-js="timer"]');
    var $start = doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');
    var interval;

    $start.addEventListener('click', startTimer, false);
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);

    function startTimer() {

        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    function stopTimer() {

        clearTimeout(interval);
    }

    function resetTimer() {

        $timer.value = 0;
        stopTimer();
    }

})(window, document);
```

>Cada função deve ter uma única responsabilidade.

Mais a frente, será abordado a modularização de código e como deixá-lo mais  
conciso.  

Já neste código, eu posso perceber que as variáveis, os listeners de evento e as  
funções foram declaradas todas juntas. 
