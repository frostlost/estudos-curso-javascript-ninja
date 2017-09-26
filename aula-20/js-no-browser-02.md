# JS no browser - parte 2

## Revisando o prompt

```javascript

(function(win) {

    'use strict';

    if(prompt('Pergunta?'))
        console.log('resposta ok!');

    console.log('sempre será mostrado');

}(window));

```
Na aula passada, foi falado sobre o método prompt. Foi 
visto que, quando eu respondo a pergunta no prompt, ele 
irá retornar true ou irá retornar a resposta que eu 
coloquei no prompt. 
