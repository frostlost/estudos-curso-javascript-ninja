# Conhecendo o objeto `Math` 

Esse objeto irá permitir o uso de cálculos matemáticos no JS.  

Uma diferença entre esse objeto e outros objetos no JS, é que ele  
**não é um function object. Ele não é um objeto que será instanciado.  
Todos os métodos dele são estáticos. Ele é apenas um objeto, e não  
uma função**.  

## `Math.PI` 
Essa propriedade retorna o número do PI.  

Esse número é útil em casos onde cálculos de circunferência são necessários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.PI);

})(window, document);

// 3.141592653589793
```

## Tabela com alguns métodos usados com o objeto `Math` 

![image](https://user-images.githubusercontent.com/29297788/33215101-b0509c56-d115-11e7-915a-b19d2de90d46.png)

![image](https://user-images.githubusercontent.com/29297788/33215820-54016fae-d118-11e7-802b-9bd59321313e.png)

## `Math.abs(x)` 
Esse método traz o valor absoluto de um número.  

O valor absoluto é o valor positivo de um número. Esse método pode ser usado em  
projetos onde são necessários cálculos em que os números não podem ser negativos.  
Um contador regressivo, por exemplo, deve chegar a, no máximo `0`, nunca `-10`,  
por exemplo:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  console.log(Math.abs(-50));

})(window, document);

// 50
```

## O padrão de arredondamento em números decimais 
Se o decimal for maior ou igual a 5, o número é arredondado para cima.  
Caso o decimal seja menor ou igual a 4 (até 1), o número é arredondado para  
baixo.  

Ex.: 
- 10.5 -> 11 
- 10.4 -> 10 

Ou seja, todo número que for passado para esse método (positivo ou negativo)  
sempre será retornado como positivo. 

## `Math.ceil(x)` 
Esse método sempre irá arredondar **para cima** o valor de um número decimal,  
ignorando o padrão de arredondamento.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.ceil(10.2));

})(window, document);

// 11
``` 

## `Math.floor(x)` 
Esse método sempre irá arredondar **para baixo** o valor de um número decimal,  
ignorando o padrão de arredondamento.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.floor(10.9));

})(window, document);

// 10
``` 

## `Math.round(x)` 
Esse método sempre irá arredondar o número decimal considerando o padrão de  
arredondamento.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.round(10.5));

})(window, document);

// 11 
``` 

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.round(10.4));

})(window, document);

// 10
``` 

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.round(10.4999999));

})(window, document);

// 10
```

## `Math.sqrt(x)` 
Square root. Esse método irá retornar a raiz quadrada de um número:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.sqrt(9));

})(window, document);

// 3 - já que 3 x 3 = 9
``` 

## `Math.cbrt(x)` 
Cubic root. Esse método irá retornar a raiz cúbica de um número:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.cbrt(27));

})(window, document);

// 3 - já que 3 x 3 x 3 = 27
``` 

## `Math.max(n1, n2, n3...)` 
Esse método possui parâmetros não obrigatórios. Retorna o **maior número** entre os  
valores passados por parâmetro:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.max(27, 0, 91, 90));

})(window, document);

// 91
``` 

## `Math.min(n1, n2, n3...)` 
Esse método possui parâmetros não obrigatórios. Retorna o **menor número** entre os  
valores passados por parâmetro:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(Math.min(27, -1, 91, 90));

})(window, document);

// -1
``` 

## Usando `Math.max(x)` e `Math.min(x)` com o `apply()`
É possível passar um array de valores para esses métodos utilizando o `apply`,  
passando como segundo parâmetro o `this` do método como o próprio `Math` e um  
array como segundo parâmetro:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var numbers = [-45, 49, 0];

  console.log(Math.max.apply(Math, numbers));

})(window, document);

// 49
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var numbers = [-45, 49, 0];

  console.log(Math.min.apply(Math, numbers));

})(window, document);

// -45
```

## Sobre métodos de funções 
O `apply` e essas funções demonstradas são funções como quaisquer outras. Ou seja,  
também possuem as mesmas propriedades usadas para os métodos e funções  
convencionais (call
