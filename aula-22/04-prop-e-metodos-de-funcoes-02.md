# Propriedades e métodos de funções - parte 02  

## .call(this, arg1, arg2, ..., argN)
Nesse método, além de eu conseguir passar o `this`, também consigo passar  
argumentos para a função.  

Então, da mesma forma que eu invocaria uma função normalmente e passo para ela  
os argumentos que ela precisa, consigo fazer isso com o `call()` também, com a  
diferença que, **o parâmetro 1 será o `this`, e os outros parâmetros serão os  
outros argumentos que a função pede**.

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call(obj2);

})();
```
A função `myFunction` recebe 4 parâmetros (a, b, c, d).  

Estou dando um `console.log` no `this.lastName`, que não foi criado ou chamado  
de algum lugar. Então, se eu invocar esta função sozinha, ele irá retornar que  
a propriedade `lastName` não existe em `undefined`. Porque o `this`, até essa  
linha, está representando `undefined`.  

Criei 2 objetos que possuem a propriedade `lastName`.  

E no final, invoquei a função `myFunction`, utilizando o método `call` e  
passando o `obj2` como `this`. Então, o `this` de dentro da `myFunction` se  
transformou no `obj2`. E então, ele pegou a propriedade `lastName` do `obj2`.  

Posso passar o restante dos parâmetros, normalmente:
```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName, a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call(obj2, 'a', 'b', 'c', 'd');

})();
```

[![silva_parametros.jpg](https://s1.postimg.org/137m694mbz/silva_parametros.jpg)](https://postimg.org/image/9cysugyyh7/)

Lembrando: **o primeiro parâmetro quando uso o `call()` é sempre quem é o `this`  
da função, e os outros parâmetros são os parâmetros normais daquela função**.  

Posso também passar apenas 3 argumentos, por exemplo  
`myFunction.call(obj2, 1, 2, 3);`. Claro que o argumento 4 seria `undefined`.  
É exatamente como uma invocação de uma função, com a diferença de que eu estou  
usando o método `call()`. Se eu fosse apenas invocar a função, seria desta  
forma: `myFunction(1, 2, 3)`.  

Em breve será visto mais usos interessantes do `call()`, porque usá-lo e quando  
usá-lo.

É importante saber também que, quando eu não quiser passar o `this`, posso passar  
`null`. Neste caso, o `this` do método será `null`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call(null, 1, 2, 3);

})();
```

[![null.jpg](https://s1.postimg.org/1fz0cf48tb/null.jpg)](https://postimg.org/image/2iypnb02or/)

Ou eu posso passar um objeto vazio (posso passar qualquer coisa, desde que seja  
um objeto). O `null` não é um objeto mas, ele representa um objeto por causa de  
um bug:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call({}, 1, 2, 3);

})();
```

**Quando eu estiver chamando e precisar passar `null`, posso passar o nome da  
própria função, para que ele seja o `this`**:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call(myFunction, 1, 2, 3);

})();
```

Então, **é interessante que, quando eu for invocar um `call()` e não precisar  
passar um `this` específico, utilizar a própria função como `this`**, como no  
exemplo acima.

Outra coisa interessante é que eu posso mostrar os parâmetros passados de uma  
forma dinâmica.

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName, a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    myFunction.call(myFunction, 1, 2, 3);

})();
```

Suponhamos que eu acrescente um array de argumentos, nesse código:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName, a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    var arr = [1, 2, 3];

    myFunction.call(myFunction, 1, 2, 3);

})();
```

Digamos que eu queira quebrar o `var arr = [1, 2, 3];` para passar seus itens  
como argumentos para `myFunction.call(myFunction, 1, 2, 3);`. Não há como fazer  
isso. O que eu posso fazer é passar o próprio array como argumento da função:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName, a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    var arr = [1, 2, 3];

    myFunction.call(obj2, arr);

})();
```

Mas se eu fazer isso, ou seja, chamar o array como argumento no `call()`, ele  
irá dizer que o parâmetro 1, que é o `obj2` é o valor da propriedade `lastName`  
do `obj2`, o parâmetro 2 será o array e os outros 3 parâmetros serão undefined:

[![arr.jpg](https://s1.postimg.org/9f4n5bd71r/arr.jpg)](https://postimg.org/image/479cibk73f/)

Ele retornou os 3 `undefined` porque não estou passando os parâmetros `b, c, d`,    
ao invés disso, estou passando um array e com o array eu não consigo representar  
os parâmetros `b, c, d`.  

## .apply()
Este método serve exatamente para passar um array de argumentos de forma  
dinâmica. Consigo usá-lo para invocar a função.  

## .apply(this)
Posso utilizá-lo com o primeiro parâmetro representando o `this` da função.  

## .apply(this, [arg1, arg2, ..., argN])
Também o utilizo passando argumentos, da mesma forma que o `call()` só que, com  
ele, **consigo passar um array, ou um array-like, de argumentos para a função**.  

Então, quando eu utilizo esse método, cada item do array será quebrado como  
argumento da minha função:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName, a, b, c, d);
    }

    var obj = {

        lastName: 'Melo'
    };

    var obj2 = {

        lastName: 'Silva'
    };

    var arr = [1, 2, 3, 4];

    myFunction.apply(obj2, arr);

})();
```

[![apply.jpg](https://s1.postimg.org/9ipj0udltb/apply.jpg)](https://postimg.org/image/5s0dfloqln/)

Ou seja, ao invés de eu passar vários parâmetros, como no `call()`, eu só estou  
passando 2! O primeiro é o objeto que será o `this` e o segundo será um array  
de itens. Cada item do array irá representar um parâmetro da função `myFunction`.
