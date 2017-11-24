# O objeto date - Propriedades e métodos 

## `Date.now()` 
Representa o número de milisegundos que se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o exato momento em que o método foi executado.  

Será usado em ocasiões em que seja necessário calcular o tempo, trabalhar com datas e  
com momentos específicos em que seja necessário fazer algum tipo de cálculo.  

É um método estático do objeto Date. Ou seja, não é necessário instanciar o objeto Date  
para se utilizar esse método:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date);

})(window, document);

// 1511489468248
```

## `Date.now()` - Convertendo milisegundos para segundos 
Se 1 segundo possui 1000 milisegundos, posso dividir a quantidade de milisegundos por 1000.  

Isso fará com que seja exibido quantos segundos se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o momento em que o método foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date / 1000);

})(window, document);

// 1511489718.259
```

## `Date.now()` - Convertendo segundos em minutos  
Se 1 minuto possui 60 segundos, posso dividir a quantidade de milisegundos por 1000 e dividir  
esse resultado por 60 (minutos).  

Isso fará com que seja exibido quantos minutos se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o momento em que o método foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date / 1000 / 60);

})(window, document);

// 25191497.224416666
```

## `Date.now()` - Convertendo minutos em horas 
Se 1 hora possui 60 minutos, posso dividir a quantidade de milisegundos por 1000, dividir  
esse resultado (segundos) por 60 (minutos) e dividir os minutos por hora (60).  

Isso fará com que seja exibido quantas horas se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o momento em que o método foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date / 1000 / 60 / 60);

})(window, document);

// 419858.3876472222

```

## `Date.now()` - Convertendo horas em dias 
Se 1 dia possui 24 horas, posso dividir a quantidade de milisegundos por 1000, dividir  
esse resultado (segundos) por 60 (minutos), dividir os minutos por hora (60) e dividir  
as horas por 24 (dia).  

Isso fará com que seja exibido quantos dias se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o momento em que o método foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date / 1000 / 60 / 60 / 24);

})(window, document);

// 17494.101151157407
```

## `Date.now()` - Convertendo dias em anos 
Se 1 dia possui 24 horas, posso dividir a quantidade de milisegundos por 1000, dividir  
esse resultado (segundos) por 60 (minutos), dividir os minutos por hora (60), dividir  
as horas por 24 (dia) e dividir as horas pela quantidade de dias de um ano.  

Isso fará com que seja exibido quantos anos se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o momento em que o método foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = Date.now();

  console.log(date / 1000 / 60 / 60 / 24 / 365);

})(window, document);

// 47.92905080755326
```

## `Date.now()` - Sabendo em quantos milisegundos um código foi executado  
Suponhamos que eu queira saber quanto tempo se passou após a execução de um `for`.  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var start = Date.now();

  for(var i = 0; i < 10000000; i++);

  var end = Date.now();

  console.log(end - start);

})(window, document);

// 7
```

Ou seja, o for levou 7 milisegundos para ser executado.  

**Como o `for` é um método síncrono, quando o JS lê-lo, ele só irá atribuir o  
`Date.now()` à variável `end` após o término do `for`. Ou seja, haverá um  
intervalo de tempo entre a atribuição do `Date.now()` de `start` e de `end`.** 

## Tabela com métodos que podem ser usados após instanciar o objeto `new Date()` 

![image](https://user-images.githubusercontent.com/29297788/33193526-65fe9da2-d0b0-11e7-8a74-c58d29f6fa24.png)

![image](https://user-images.githubusercontent.com/29297788/33193777-03668702-d0b2-11e7-81d8-167d661b6b0c.png)

## `date.getDate();` 
Traz o dia do mês atual (de 0 a 31):  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getDate());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33193563-baaba656-d0b0-11e7-87f1-8a8812211468.png)

## `date.getDay();` 
Traz o dia da semana (de 0 a 6), sendo que 0 é domingo e 6, sábado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getDay());

})(window, document);

// 5
```

## `date.getFullYear();` 
Traz o ano, com o formato de 4 dígitos:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getFullYear());

})(window, document);

// 2017
```

## `date.getYear();` 
Traz a quantidade de anos passados desde 1900 até o momento da execução do código:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getYear());

})(window, document);

// 117
```

## `date.getHours();` 
Traz as horas:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getHours());

})(window, document);

// 0
```

## `date.getMilliseconds();` 
Traz os milisegundos do momento em que o código foi executado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getMilliseconds());

})(window, document);

// 670 
``` 

Caso o `new Date` seja atribuído à uma variável **no console**, o JS irá considerar  
os milisegundos **em que a atribuição ocorreu**. Ou seja, esse valor não irá mudar:  

![image](https://user-images.githubusercontent.com/29297788/33193886-ccff4252-d0b2-11e7-9620-e7f2f472e8b8.png)

## `date.getMinutes();` 
Traz os minutos:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getMinutes());

})(window, document);

// 1 
```

## `date.getMonth();` 
Traz os meses (de 0 a 11):  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getMonth());

})(window, document);

// 10
``` 

Lembrando que esse valor é zero-based. 

## `date.getSeconds();` 
Traz os meses (de 0 a 11):  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getSeconds());

})(window, document);

// 42
``` 

## `date.getTime();` 
Representa o número de milisegundos que se passaram desde as 00:00:00 de 01 de Janeiro  
de 1970 até o exato momento em que o método foi executado. Ou seja, faz o mesmo que o  
método `Date.now()`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date.getTime());

})(window, document);

// 1511492732228 
``` 

## Outros métodos do Date Object 
Esse objeto possui vários outros métodos, setters, por exemplo, porém, os que serão mais  
utilizados são os mostrados até aqui. 
