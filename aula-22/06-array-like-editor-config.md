# Array-like e editorconfig

## Array.prototype
Suponhamos que eu tenha o objeto `array` padrão do JavaScript, e ele tem uma  
propriedade `.prototype`.  

Os métodos de array como `forEach()`, `map()`, `reduce()`, `some()` e `every()`,  
estão todos pendurados no `.prototype` do array. E eu consigo utilizar esses  
métodos junto com o `.call()` e junto com o `.apply`.  

Suponhamos que eu tenho o objeto array:  

```JAVASCRIPT
(function() {
    'use strict';

    console.log(Array);

})();
```

[![array.jpg](https://s1.postimg.org/8crxo7di3z/array.jpg)](https://postimg.org/image/954t5xu3u3/)

Quando vou criar um `array` com `new Array()`, é criado um `array` vazio para  
mim:

[![new-array.jpg](https://s1.postimg.org/9r59iercb3/new-array.jpg)](https://postimg.org/image/5838fflvd7/)

Isso é o mesmo que eu utilizar só os colchetes:

[![colchetes.jpg](https://s1.postimg.org/838nze7zu7/colchetes.jpg)](https://postimg.org/image/9dbl5ppz57/)

Um novo array é criado para mim da mesma forma. Um array foi instanciado na  
memória para mim.

Só que o `Array` possui uma propriedade `.prototype`:

[![array_prototype.jpg](https://s1.postimg.org/4rfgxdcl8v/array_prototype.jpg)](https://postimg.org/image/3hcjr1ulxn/)

Esse `.prototype` possui a propriedade `forEach()`, por exemplo:

[![for_each_array.jpg](https://s1.postimg.org/3ayunyhefz/for_each_array.jpg)](https://postimg.org/image/943sx94uor/)

Se eu apenas digitar `Array.prototype.` no console, ele me mostrará todos as  
propriedades que estão penduradas no `.prototype`:

[![propriedades.jpg](https://s1.postimg.org/9pq7xq6o4f/propriedades.jpg)](https://postimg.org/image/37s04evouz/)

Isso significa que eu posso usar essas propriedades para 'enganar' o JavaScript  
e fazer com que ele transforme `arrays-like` em `array` de verdade para mim.  
Assim, posso iterá-los com essas propriedades de array.

Suponhamos que eu tenha uma função:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {

    }

})();
```

Se eu der um `console.log` utilizando o objeto `arguments` (lembrando que ele é  
um `array-like`), e der um outro `console.log` fora da função, invocando a  
função criada acima e passar parâmetros para ela:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        console.log(arguments);
    }

    myFunction(1, 2, 3, 4, 5, 6);

})();
```

[![arguments.jpg](https://s1.postimg.org/64rsiuqnwv/arguments.jpg)](https://postimg.org/image/3ysdx2z05n/)

Ou seja, o `arguments` é um `array-like` que possui 6 itens.  

Se eu especificar um `length` no `arguments`, será logado o número de argumentos  
que o array possui:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        console.log(arguments.length);
    }

    myFunction(1, 2, 3, 4, 5, 6);

})();
```

[![length_arguments.jpg](https://s1.postimg.org/4zniuxtaf3/length_arguments.jpg)](https://postimg.org/image/11v5e9i9rv/)

Mas, se eu tentar usar `arguments.forEach` para tentar iterar por todos esses  
argumentos e mostrar cada argumento no console, será mostrado que  
`arguments.forEach` não é uma função:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        arguments.forEach(function(arg) {
            console.log(arg);
        });
    }

    myFunction(1, 2, 3, 4, 5, 6);

})();
```

[![for-each-error.jpg](https://s1.postimg.org/5t2oj7acj3/for-each-error.jpg)](https://postimg.org/image/9com90d2az/)

**Isso acontece porque o `arguments` não é um `array` de verdade e sim um  
`array-like`**. Ou seja, ele tem o formato de `array` e pode ser utilizado como  
array, mas não é um array de verdade.  

Alguns exemplos de `array-like`:
1. Argumentos de uma função
2. Node lists (elementos HTML)

A diferença deles para um `array` de verdade é que eles não herdam propriedades  
do `Array.prototype`. Ou seja, eles não possuem as propriedades como `forEach()`,  
`map()`, `reduce()`, `some()` e `every()`, por exemplo.  

## Iterando um array-like
Sei que o `Array.prototype` possui o método `forEach`:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        Array.prototype.forEach(function(arg) {
            console.log(arg);
        });
    }

    console.log(myFunction(1, 2, 3, 4, 5, 6));

})();
```

Também vi algumas coisas sobre o método `call()`.  

Em um outro exemplo sobre ele, dentro da função, vou declarar um array de  
verdade, iterá-lo usando o `forEach`, dar um `console.log` em cada item e  
invocar a função:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item) {

            console.log(item);
        });
    }

    myFunction();

})();
```

[![array-iterado.jpg](https://s1.postimg.org/913go64yf3/array-iterado.jpg)](https://postimg.org/image/6yno046ddn/)

Mas, se eu utilizar o `arguments`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        arguments.forEach(function(item) {

            console.log(item);
        });
    }

    myFunction(1, 2, 3, 4);

})();
```

[![arguments-error.jpg](https://s1.postimg.org/1ocbjqjasf/arguments-error.jpg)](https://postimg.org/image/3g5aen2nob/)

É mostrado para mim que ele não tem a propriedade `forEach`, pois ele não é um  
array de verdade.  

Utilizando um array de verdade, vou passar o `this` como parâmetro do  
`console.log`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item) {

            console.log(this);
        });
    }

    myFunction();

})();
```

[![this-foreach.jpg](https://s1.postimg.org/6d2ixgk17j/this-foreach.jpg)](https://postimg.org/image/6d2ixgk17f/)

O `this`, dentro do `forEach` está como `undefined` porque ele está iterando  
pelo array `arr`.  

## Especificando um segundo parâmetro para `forEach`, `map` e `filter`

Em métodos como o `forEach`, `map` e `filter`, consigo passar um segundo  
parâmetro para eles. Isso não foi visto anteriormente pois não havia  
necessidade, até então.  

Esse segundo parâmetro é o `this` dentro do `forEach`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item) {

            console.log(this);
        }, arr);
    }

    myFunction();

})();
```

Então, se eu passo, por exemplo, o array, o `this` será o `array` que eu passei:

[![this-array.jpg](https://s1.postimg.org/7pbaemutrz/this-array.jpg)](https://postimg.org/image/6f8d8bcugr/)

Se eu utilizar o `arguments` como o segundo parâmetro do `forEach` para que o  
`console.log` referencie os argumentos como `this`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item) {

            console.log(this);
        }, arguments);
    }

    myFunction();

})();
```

[![arguments-this.jpg](https://s1.postimg.org/30l30wub2n/arguments-this.jpg)](https://postimg.org/image/6d3svaavez/)

O arguments passou em branco pois, eu não tenho nenhuma propriedade quando não  
preencho os argumentos da função:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item) {

            console.log(this);
        }, arguments);
    }

    myFunction(1, 2, 3, 4);

})();
```

[![arguments_sem_prop_em_branco.jpg](https://s1.postimg.org/63j98neydb/arguments_sem_prop_em_branco.jpg)](https://postimg.org/image/8r8pj07zp7/)

Ou seja, quando eu passo os 4 items, o JavaScript passa o arguments como um dos  
4 items que eu passei. Essa é uma das formas de utilizar.  

Mas, o `arguments` está sendo passado com base no `arr`. Ou seja, ele irá iterar  
pelos 4 items do array e, se eu tiver 8 items como `arguments`... digamos  
que eu queira passar o `item` e o `index` e fazer ele pegar o `this[index]` e  
mostrar o `index`.  

O esperado é que ele mostre todos os meus `index`. Observando que, passei 8  
items como argumentos mas, o meu array só tem 4.

Então, vou fazer um `forEach` no array, passar o `arguments` como segundo  
parâmetro, fazer com que seja mostrado o índice do meu `arguments`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item, index) {

            console.log(this[index]);
        }, arguments);
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

[![index-arguments.jpg](https://s1.postimg.org/3a86j6bbpb/index-arguments.jpg)](https://postimg.org/image/17sdv4cqnv/)

Ele não mostra os 8 argumentos pois o `arr` tem apenas 4 itens. O `forEach` está  
iterando com a quantidade de itens do array.

## Iterando o `arguments`

Ou utilizo um `for` normal:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        for(var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

[![for-arguments.jpg](https://s1.postimg.org/28niszdvu7/for-arguments.jpg)](https://postimg.org/image/8fywt59my3/)

Então ele iterou por todos os argumentos do meu array.  

Se eu quiser utilizar métodos como o `forEach`, `map`, `filter`, `reduce`, que  
são muito importantes e interessantes, posso utilizar o  
`Array.prototype.forEach`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        Array.prototype.forEach();
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

E vou passar o arguments como o `this` dessa propriedade `forEach`. Então irei  
invocar o `forEach` com o `call` e vou passar o `arguments`. Lembrando que o  
`call` passa o `this` como primeiro parâmetro para a função que está sendo  
invocada (`forEach`). Então, estou invocando o `forEach` passando o `arguments`  
como o `this` para ele, ou seja, **o `forEach` irá iterar o `arguments`**. E vou  
passar a função que irá fazer a iteração como segundo parâmetro do `forEach`.  

O `item` será o meu argumento e vou passar o `index` também, para caso eu  
precise dele:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item);
        });
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

[![for_each_call.jpg](https://s1.postimg.org/5cqj2uuslr/for_each_call.jpg)](https://postimg.org/image/4gu1nel45n/)

Ou seja, eu consegui fazer a iteração como se ele fosse um array. Então,  
basicamente, eu engano o JavaScript chamando a propriedade `forEach` de  
`Array.prototype`, utilizando o `call`.  

Se eu utilizasse o `apply`, o segundo parâmetro (função) teria que estar dentro  
de um array, porque o `apply` espera que o parâmetro 2 seja um `array`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        Array.prototype.forEach.apply(arguments, [function(item, index) {
            console.log(item);
        }]);
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

[![apply.jpg](https://s1.postimg.org/6potcdclnz/apply.jpg)](https://postimg.org/image/2kt809ffl7/)

Também funcionou. Mas, neste caso, o ideal é utilizar o `call` simplesmente para  
não incluir um array desnecessário.

**Assim, consigo usar o `forEach` e qualquer propriedade de array. Ou seja, eu  
consigo estender qualquer objeto do JavaScript utilizando esse formato  
`Array.prototype.`**.  

Então, se eu quiser utilizar o `reduce`, por exemplo, o parâmetro 1 da função  
será o valor `acumulated`, o segundo será o valor `actual` e o terceiro será  
o `index`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        Array.prototype.reduce.call(arguments, function(acumulated, actual, index) {
            console.log();
        });
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

E posso retornar o valor acumulado + o valor atual:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction() {
        var result = Array.prototype.reduce.call(arguments, function(acumulated, actual, index) {
            return acumulated + actual;
        });

        console.log(result);
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

})();
```

O esperado é que ele faça a mesma coisa que o `reduce`, como se eu tivesse feito:  

```JAVASCRIPT
arr.reduce(function(acumulated, actual) {

        return acumulated + actual;
    });
```

[![reduce.jpg](https://s1.postimg.org/3ntovfohqn/reduce.jpg)](https://postimg.org/image/1048l2vgej/)

Uma das vantagens disso é que eu não preciso criar os meus próprios métodos de  
de `reduce`, `map` e `filter`, para utilizar com o `arguments`. Posso utilizar os  
métodos do JavaScript simplesmente utilizando o `prototype`, `call` e `apply`.

## editorconfig
http://editorconfig.org/ é um configurador de editor. Ele irá criar alguns  
padrões para quando eu for editar os meus arquivos.  

Quando eu tenho esse arquivo `.editorconfig` na raiz do diretório do meu  
projeto, os arquivos que estão configurados com aquelas configurações que eu  
passei sempre terão esse padrão.  

`[*.{js,py}]` charset = utf-8 - todos os arquivos com a extensão `js` e `py` (javascript phyton),  
irão utilizar o `charset utf 8`.

[![space.jpg](https://s1.postimg.org/4zpoyfm4u7/space.jpg)](https://postimg.org/image/1qql1ryn7f/)

Todos os arquivos phyton terão a indentação estilo espaço, com o tamanho de 4.  

O **editorconfig** portanto é uma ferramenta interessante para que eu comece a  
padronizar os meus códigos.  

## Como utilizar o editorconfig
Preciso instalar a extensão `.editconfig` no meu editor e, quando eu estiver  
resolvendo um desafio no meu editor, o próprio editor fará a leitura desse  
arquivo e irá manter um padrão.
