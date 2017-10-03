# Propriedades e métodos de funções - parte 01   
## .name
Funções tem uma propriedade `.name`. Essa propriedade me retorna o nome da  
função, como uma `string`.  

Em caso de funções anônimas, essa propriedade retornará `undefined`.  

## .length
Conta a quantidade de parâmetros que a função pode receber.

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c) {

    }

    console.log(myFunction.length);

})();

// 3
```

Se eu coloco mais 1 parâmetro, o `myFunction.length` retornará `4`, indicando  
que essa função pode receber até `4` parâmetros.

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

    }

    console.log(myFunction.length);

})();

// 4
```

Esse método é interessante em casos que eu preciso validar o nome de uma função  
pela quantidade de parâmetros que estão sendo passados a ela.

## .toString()
Todos os objetos em JavaScript possuem uma propriedade `.toString()`. E para  
cada tipo de objeto, o `.toString()` funciona de uma forma diferente.  

Este método converte toda a função em uma string.

>Lembrando que, quando utilizo `myFunction.toString()`, sem invocar a função.   
Se eu invocar a função nesse caso, estarei retornando o valor dela e chamando o  
método baseado no valor dela. Neste caso, **estou chamando a função usando apenas  
o nome dela** para que eu possa ter acesso às propriedades do tipo `function`.

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

    }

    console.log(myFunction.toString());

})();
```
[![function_string.jpg](https://s1.postimg.org/1wl3mc5rcf/function_string.jpg)](https://postimg.org/image/5na97kumjv/)

Se eu incluir algum código dentro da função, ele também é convertido em string:  

[![function_string_return.jpg](https://s1.postimg.org/2f0o39gq0f/function_string_return.jpg)](https://postimg.org/image/5kg627b4x7/)

## .call()
Este método irá invocar a função para mim.  

Se eu apenas chamar a função pelo nome, o console irá mostrá-la:  
```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        return 'oi';
    }

    console.log(myFunction);

})();
```
[![name_function.jpg](https://s1.postimg.org/25g4gmvy73/name_function.jpg)](https://postimg.org/image/57c0huxae3/)

Mas, se eu chamar a função com o método `.call()`, sem passar parâmetros para  
ele, ele me retorna o valor da função:  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        return 'oi';
    }

    console.log(myFunction.call());

})();

// 'oi'
```

É exatamente a mesma coisa que eu invocar a função só com os parênteses  
`myFunction()`.  

Por que chamar a função com o método `.call()` se eu posso invocá-la apenas com  
os parênteses `myFunction()`?

## .call(this)
Eu posso passar um `this` para a função que estou invocando. Ou seja, eu posso  
dizer quem é o `this` daquela função.  

Se uma função tem um construtor, por exemplo, quando eu uso o `new`, eu crio um  
novo objeto e esse `this` irá fazer referência a esse novo objeto instanciado.  

Quando utilizo o `.call()`, posso dizer quem será o `this` daquela função:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        return this.lastName;
    }

    console.log(myFunction.call());

})();
```
Ele irá me retornar que não existe a propriedade 'lastName' de `undefined`:

[![lastname.jpg](https://s1.postimg.org/6w0oouutov/lastname.jpg)](https://postimg.org/image/95jp8cfk5n/)

Porque na verdade, quando uso o `use strict;` e simplesmente chamo uma função,  
o `this` dentro da função é igual ao `window`, ou ao objeto global. Isso  
significa que eu não tenho uma propriedade 'lastName' no meu objeto global.  

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        return this.lastName;
    }

    console.log(new myFunction);

})();
```

Se eu chamar com o `new myFunction` como no código acima, ele criou uma função:

[![new_function.jpg](https://s1.postimg.org/5kjzvnm04v/new_function.jpg)](https://postimg.org/image/97pjj6hsmj/)

Vou declarar uma variável chamada 'myName' recebendo o `new MyFunction` e  
passar uma propriedade `.lastName` para ela. O valor dessa propriedade será  
a string 'Melo':

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        return this.lastName;
    }

    var myName = new myFunction();

    myName.lastName = 'Melo';

    console.log(myName);

})();
```
[![my_Name.jpg](https://s1.postimg.org/4yekviat2n/my_Name.jpg)](https://postimg.org/image/1wioua9gvf/)

O `myName` foi invocado à partir da `new myFunction()` que na verdade, agora ela  
é um construtor, porque utilizei o `new`. E agora eu tenho a propriedade  
`lastName`, que é o `this.lastName;`.  

Suponhamos que eu tenha uma função:
```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName);
    }

})();
```

E agora, quero invocar o `this.lastName`, por exemplo. Então, vou criar um  
objeto que terá uma propriedade `lastName` que irá receber o valor 'Melo'.  
Quando eu chamar `myFunction.call(obj)` passando o objeto como `this` para essa  
função, eu estou dizendo que o objeto `obj` é o `this` da função `myFunction`:

```JAVASCRIPT
(function() {
    'use strict';

    function myFunction(a, b, c, d) {

        console.log(this.lastName);
    }

    var obj = {

        lastName: 'Melo'
    };

    myFunction.call(obj);

})();
```
[![this_last_Name.jpg](https://s1.postimg.org/1kh2n7m1u7/this_last_Name.jpg)](https://postimg.org/image/3qgh8zdpl7/)

Então, o `call()` serve para invocar a função mas, **eu consigo passar por  
parâmetro quem será o `this` da função**. O `obj` será o `this` da função. Então  
quando eu chamo o `this` dentro da função, esse `this` na verdade irá  
referenciar o objeto. É como se eu chamasse `console.log(obj.lastName);`.  

A diferença é que eu posso chamar qualquer objeto. Por exemplo, posso criar um  
outro objeto que tenha outro `lastName` e, quando eu passar o `obj2` para o  
`myFunction.call(obj2)`, o `this` está representando o `obj2`:

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

[![silva.jpg](https://s1.postimg.org/1ccuj2izvz/silva.jpg)](https://postimg.org/image/1xmi5ddg6j/)
