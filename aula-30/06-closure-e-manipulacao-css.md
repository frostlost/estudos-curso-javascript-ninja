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

Se eu simplesmente quiser ver quais propriedades css posso usar com o `.style`, posso dar  
um `console.log($div.style);`:  

![image](https://user-images.githubusercontent.com/29297788/33026604-f90a9c9c-cdf7-11e7-93a4-9bc26d92d2e3.png)

>Porém, não é uma boa prática usar essa propriedade. Em alguns momentos ela pode ser  
necessária para, por exemplo, estilizar um display none no elemento:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.style.width = '100px';
  $div.style.height = '100px';
  $div.style.backgroundColor = 'red';
  $div.style.display = 'none';

  console.log($div.style);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33026887-b6da0e9c-cdf8-11e7-832f-f57002548235.png)

## Estilizando elementos através do método `setAttribute('style', 'styleProperties')` 
Ainda na estilização inline de elementos, é possível usar esse método também, passando  
o atribut `style` como 1º parâmetro e seu valor como 2º parâmetro:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.setAttribute('style', 'width: 100px; height: 100px; background-color: red;');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33027095-5edc1cde-cdf9-11e7-8f4f-e3b9bd56dc46.png)

>Também não é uma boa prática usar esse método. Em alguns momentos ele pode ser  
necessário em certas ocasiões excepcionais.  

## Estilizando elementos através da propriedade `elementName.classList` 
Essa propriedade permite que classes do elemento sejam modificadas. Ela funciona tanto como  
`getter` ou `setter`.  

## `elementName.classList` como getter 
Suponhamos que eu tenha uma classe em meu elemento. Vou utilizar essa propriedade como um `getter`,  
para saber quais classes esse elemento possui:

```HTML 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Closure / Module Pattern - Aula 30, parte 06</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <div class="container"></div>

  <script src="js/main.js"></script>

</body>
</html>
```

```CSS 
.container {
  width: 100px;
  height: 100px;
  background: green;
  transition: .3s;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.green {
  background: green;
}
```

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  console.log($div.classList);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33027567-9a2b14e2-cdfa-11e7-9cea-425d52230972.png)

Ou seja, é retornado um array com uma lista de todas as classes que o elemento possui.  

## `elementName.classList` como setter 
Suponhamos que eu queira manipular as classes que esse elemento possui, utilizando a  
propriedade `element.classList` como um setter. Isso é possível ao utilizar as  
seguintes propriedades:  

![image](https://user-images.githubusercontent.com/29297788/33050368-b45d2c14-ce4b-11e7-940b-410aeb26d384.png)

### `elementName.classList.contains('className')`
Essa propriedade irá verificar se uma classe existe no elemento, retornando `true` or  
`false`: 

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  console.log($div.classList.contains('container'));

})(window, document);

// true
```

### `elementName.classList.add('className')`
Essa propriedade irá adicionar uma classe ao elemento:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.classList.add('blue');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33050536-7c1a6bea-ce4c-11e7-96b6-12723a59c332.png)

>Lembrando que a class blue já está setada no arquivo css.  

### `elementName.classList.toggle('className')` 
A tradução de literal de `toggle` é 'alternar'.  

Vou manipular qual classe css o elemento recebe no evento de click, fazendo com que,  
a cada click no elemento, ele faça o `toggle` da class blue, que muda a cor de  
background do elemento:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.addEventListener('click', function() {
    this.classList.toggle('red');
  }, false);

})(window, document);
```

```CSS 
.container {
  width: 100px;
  height: 100px;
  background: green;
  transition: .3s;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.green {
  background: green;
}
```

![image](https://user-images.githubusercontent.com/29297788/33050765-afafea4c-ce4d-11e7-8e09-8a3f2a39763f.png)

Ou seja, o `toggle` está tirando e colocando a class no elemento. Se, ao clicar,  
a classe não existir no elemento, ele a adiciona. Se, ao clicar, a classe existir  
no elemento, ele a remove.  

### `elementName.classList.remove('className')` 
Remove a classe de um elemento:  

```JAVASCRIPT 
(function(win, doc) {

  'use strict';

  var $div = doc.querySelector('div');

  $div.addEventListener('click', function() {
    this.classList.remove('container');
  }, false);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33050847-34654f2a-ce4e-11e7-8b9e-65ddc2bd2760.png)

