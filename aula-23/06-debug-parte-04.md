# Debug - parte 04

## `console.time()` e `console.timeEnd()`
Permite que eu Debugue o código verificando quanto tempo ele está demorando a  
ser executado.  

Para isso, será usado como exemplo um código imperativo, não funcional, que irá  
bloquear a `thread`:

```JAVASCRIPT
(function() {
    'use strict'

    for(var i = 0; i < 10000; i++) {
        console.log('...calculando');
    }
}());
```

Isso fará com que '...calculando' seja mostrado 10000 vezes no console.  

Vou acrescentar `console.time('Calculando o tempo do for')`. Como não tenho  
nenhuma função de callback, ou seja, o código do `for` é síncrono, o Js irá  
executar todo o `for` antes de entrar no `console.timeEnd`.  

O `console.time()` irá iniciar um tempo, irá executar o `for`, e o `timeEnd`,  
como eu coloquei a mesma mensagem, irá pegar o valor inicial do `console.time`  
com o valor final e fará o cálculo de quanto tempo o `for` levou para ser  
executado:

```JAVASCRIPT
(function() {
    'use strict'

    console.time('Calculando o tempo do for');
    for(var i = 0; i < 10000; i++) {
        console.log('...calculando');
    }
    console.timeEnd('Calculando o tempo do for');
}());
```

[![time.jpg](https://s1.postimg.org/69rehmupdr/time.jpg)](https://postimg.org/image/18zbq2nuuz/)

Levou 2 segundos e 860 milisegundos para ser carregado.  

## `console.table()`

Suponhamos que eu tenha um array de objetos. Esse objeto pode ser uma lista de  
compras. É um array de objetos que possuem as mesmas propriedades:  

```JAVASCRIPT
(function() {
    'use strict'

    var arr = [
        {item: 'Arroz', price: 'R$ 10'},
        {item: 'Feijão', price: 'R$ 20'},
        {item: 'Macarrão', price: 'R$ 12'},
        {item: 'Carne', price: 'R$ 30'}
    ];
    console.log(arr);
}());
```

[![objects.jpg](https://s1.postimg.org/40mfa4piyn/objects.jpg)](https://postimg.org/image/3bt5q41zy3/)

Os 4 objetos me foram mostrados mas, essa visualização não é muito amigável. Um  
dos motivos é que tenho que abrir cada um para visualizá-los.  

Se eu substituir o `console.log(arr)` por `console.table(arr)`, o array será  
colocado em uma tabela. Como tenho um array de itens e cada item possui as  
mesmas propriedades, uma tabela será montada:  

```JAVASCRIPT
(function() {
    'use strict'

    var arr = [
        {item: 'Arroz', price: 'R$ 10'},
        {item: 'Feijão', price: 'R$ 20'},
        {item: 'Macarrão', price: 'R$ 12'},
        {item: 'Carne', price: 'R$ 30'}
    ];
    console.table(arr);
}());
```

[![table.jpg](https://s1.postimg.org/83dlb4jbov/table.jpg)](https://postimg.org/image/2z1wlujegb/)

Ou seja, o índice `0` do array tem um item chamado 'Arroz' e o preço com o valor  
'R$ 10', e assim por diante. 
