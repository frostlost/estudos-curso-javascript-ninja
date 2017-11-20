# Closure e Manipulando CSS 

## Closure 
Nas aulas anteriores foi visto que cada função tem um escopo próprio. Pode-se dizer  
que cada função em JS cria uma closure. **Closure é um escopo fechado**.  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var scope = 'global scope';

})(window, document);

console.log(scope);
```

![image](https://user-images.githubusercontent.com/29297788/33021772-27b2caf0-cdea-11e7-98e5-d3aca3ff89ea.png)

Esse erro ocorre por que a variável `scope` só é lida dentro da função `IIFE`.  

## Exemplos de `closure` com variáveis de escopo global e local 

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var scope = 'global scope';

  function checkScope() {
    var scope = 'local scope';

    function func() {
      return scope;
    }

    return func();
  }

  console.log(scope);

})(window, document);

// 'global scope'
```

Quando dou o `console.log(scope);`, ele consegue ter acesso apenas à `var scope = 'global scope';`, 
que foi declarada fora da função `checkScope`.  

Porém, se eu der um `console.log(checkScope());` invocando `checkScope`, irei estar chamando a  
variável `var scope = 'local scope';` fora da função `checkScope()`:  

```JAVASCRIPT
(function(win, doc) {

  'use strict';

  var scope = 'global scope';

  function checkScope() {
    var scope = 'local scope';

    function func() {
      return scope;
    }

    return func();
  }

  console.log(checkScope());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33022322-f6ee7d90-cdeb-11e7-9ab3-673bccbfbf82.png)

Apesar de `checkScope()` estar sendo chamada fora da função, o `'local scope'` é retornado  
por que, como o JS trabalha com closures, a função `func()` consegue guardar os valores tanto  
dentro dela, como os valores que estão fora (`var scope = 'local scope';`).  

Se, ao invés de eu retornar a execução da função `func()`, eu apenas retornar a referência dela e,  
executá-la fora da função, ao invés de executar dentro, ela continua a retornando a  
`var scope = 'local scope';`:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var scope = 'global scope';

  function checkScope() {
    var scope = 'local scope';

    function func() {
      return scope;
    }

    return func;
  }

  console.log(checkScope()());

})(window, document);

// 'local scope'
``` 

## Exemplos de `closure` com variáveis contadoras e incrementos 

Retornando o valor incrementado de uma variável ao invocar a função:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var counter = 0;

  function increment() {
    return counter++;
  }

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33022936-d384ff6c-cded-11e7-866c-ad8ab1c455fd.png)

Se eu criar outra função que faça com que o counter receba `150`, declarar e invocar essa  
função antes dos `console.log(increment());`, o valor que será mostrado no console será  
baseado nessa segunda função:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var counter = 0;

  function increment() {
    return counter++;
  }

  function otherFunction() {
    counter = 150;
  }

  otherFunction();

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33023913-c19ff5ce-cdf0-11e7-9bd4-b238b010041d.png)

Ou seja, a `var counter = 0;` está compartilhando escopo com as duas funções.  

## Exemplo de closure com variáveis que recebem uma `IIFE`
Caso eu queira incrementar o counter à partir do `0`, posso declarar uma variável `increment`  
que irá receber uma `IIFE`. O que irá acontecer é que essa função `IIFE` será executada  
antes da atribuição à variável `increment`. Então, dentro dessa `IIFE` posso criar uma variável  
`counter`, que será incrementada, retornar uma nova função (neste momento é que a `var = increment;`  
se tornará uma nova função), e dentro dessa nova função, retornar o incremento da variável  
`counter`:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var counter = 10;

  var increment = (function() {
    var counter = 0;
    return function() {
      return counter++;
    };
  })();

  function otherFunction() {
    counter = 150;
  }

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33024752-18746af4-cdf3-11e7-9a68-adc5f37f13a0.png)

Ou seja, o incremento foi feito baseado na variável `counter` que está dentro da `IIFE`. A function que  
está dentro da `IIFE` criou um escopo local onde eu pude criar uma variável `counter` (que não é a variável  
fora da função `increment`), e como o `increment` recebe uma função, eu posso invocá-lo cada vez que o  
`counter` que está em escopo deva ser incrementado.  

*** 

Suponhamos que eu queira começar o counter em `100` e fazer com que o retorno da `IIFE` seja outra `IIFE`  
que retorna uma outra função que retorna o incremento do counter local que recebe `0` como valor  
inicial:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var counter = 10;

  var increment = (function() {
    var counter = 100;
    return (function() {
      var counter = 0;
      return function() {
        return counter++;
      }
    })();
  })();

  function otherFunction() {
    counter = 150;
  }

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33025540-700f0f9c-cdf5-11e7-807e-dda4880fe267.png)

Ou seja, tanto o counter fora de `increment` como o primeiro counter dentro de `increment` foram  
ignorados, porque estou retornando uma `IIFE` que está gerando um escopo, aproveitando esse escopo e  
gerando uma nova variável, e retornando a função que está sendo invocada pelo `increment` nos  
`console.log`.  

## Manipulando CSS 

### `elementName.style.cssProperty` 
Uma das formas de estilizar um elemento do DOM é utilizando essa propriedade `.style` no  
elemento capturado. **Essa propriedade cria estilos inline no elemento**.  

Digamos que eu queira manipular o css de uma div do html:  

```HTML
<body>

  <div></div>

  <script src="js/main.js"></script>

</body>
```

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.style.width = '100px';
  $div.style.height = '100px';
  $div.style.backgroundColor = 'red';

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33026417-8401757e-cdf7-11e7-95de-503ff92e25dc.png)


