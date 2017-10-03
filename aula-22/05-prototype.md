# Prototype
Em aulas passadas, foi visto que os objetos principais do JavaScript (`object`,  
`string`, `array`, `date`, `RegExp`, `number`, ...) possuem uma propriedade  
chamada `.prototype`.  

Essa propriedade possui todos os métodos do objeto principal que irão ser  
herdados sempre que eu criar um novo objeto. Ele irá estender os meus objetos.   

Se eu crio um objeto vazio, por exemplo, quando o chamo, ele simplesmente irá  
dizer que eu tenho um objeto vazio:  

```JAVASCRIPT
(function() {
    'use strict';

    var obj = {};

    console.log(obj);

})();
```

[![obj_vazio.jpg](https://s1.postimg.org/4iy7rr12ov/obj_vazio.jpg)](https://postimg.org/image/1h2bqizqhn/)

Mas, na verdade, eu tenho algumas propriedades desse objeto, por exemplo:  

```JAVASCRIPT
(function() {
    'use strict';

    var obj = {};

    console.log(obj.toString());

})();

// [object Object]
```

Tenho várias outras propriedades. Posso, por exemplo, ter um `array` com 3 itens.  
Então, o meu `array` tem apenas esses 3 itens, não tem um método:  

```JAVASCRIPT
(function() {
    'use strict';

    var arr = [1, 2, 3];

    console.log(arr);

})();
```

[![array.jpg](https://s1.postimg.org/1fok3nxbvj/array.jpg)](https://postimg.org/image/816dup1duj/)

Mas eu sei que, eu posso dar um `slice` nesse array.  

```JAVASCRIPT
(function() {
    'use strict';

    var arr = [1, 2, 3];

    console.log(arr.slice(1));

})();

// [2, 3]
```

**Tenho o método `slice` disponível por que ele é herdado do `Array.prototype`**:

```JAVASCRIPT
(function() {
    'use strict';

    var arr = [1, 2, 3];

    console.log(arr.slice(1));

    console.log(Array.prototype);

})();
```

[![array_prototype.jpg](https://s1.postimg.org/5ifl2qmiun/array_prototype.jpg)](https://postimg.org/image/1rqfhhxnmz/)

O `Array.prototype` possui propriedades que foram atribuídas ao `.prototype`.  
O `.prototype` é o protótipo dos meus métodos, dos meus construtores e, à partir  
do protótipo, consigo estender objetos. À partir do `.prototype`, consigo fazer  
herança no JavaScript.

## Prototype em funções
`Object`, `Array`, `string`, `number` são objetos que já existem no JavaScript.  
Vou criar o meu próprio construtor `MyFunction` e passar parâmetros para  
esse construtor `MyFunction(name, lastName)`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {


    }

})();
```

**Lembrando que construtores começam com letra maiúscula**.  

Vou utilizar o `this` dentro do construtor, com a propriedade `fullName`, que  
irá receber o `name` passado por parâmetro e concatená-lo com `lastName`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.fullName = name + ' ' + lastName;
    }

})();
```

Vou criar um novo objeto chamado 'roger', que irá herdar de `MyFunction` tudo o  
que o `MyFunction` tem, e vou passar os argumentos dos parâmetros `name` e  
`lastName`.

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.fullName = name + ' ' + lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

})();
```

**Agora tenho a propriedade `fullName` no objeto `roger` pois, o `this`  
representa o novo objeto instanciado (`roger`)**.

Se eu logar `roger.fullName`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.fullName = name + ' ' + lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.fullName);

})();

// "Roger Melo"
```

Só que eu poderia fazer de outra forma. Eu poderia criar a função passando os  
parâmetros para frente:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.fullName);

})();
```

Poderia chamar `MyFunction.prototype.fullName`. O `MyFunction` neste caso está  
estendendo essa função (tenho 2 propriedades nela `name` e `lastName`). E irei  
estender um método chamado `fullName` e esse método `fullName` irá retornar a  
concatenação do `this.name` com o `this.lastName`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.fullName());

})();

// Roger Melo
```

Então, o `MyFunction.prototype.fullName` está fora da função principal  
`function MyFunction(name, lastName)`.  

Na função principal, que é a função construtora, estou usando o `this.name` e  
passando para ela o parâmetro `name`. Ou seja, o objeto que eu instanciar terá  
uma propriedade chamada 'name' e uma propriedade chamada 'lastName'. Mas ele não  
irá ter uma propriedade chamada 'fullName'.  

A propriedade 'fullName' está sendo criada em:

```JAVASCRIPT
MyFunction.prototype.fullName = function() {

    return this.name + ' ' + this.lastName;
}
```

Estou dizendo que `fullName` é um método e, quando eu invocar esse método, ele  
irá retornar o `name` e o `lastName` **do objeto instanciado**.  

Em `var roger = new MyFunction('Roger', 'Melo');`, instanciei um novo objeto  
(`MyFunction`) passando o `new MyFunction('Roger', 'Melo');`, passando como  
argumentos o que os parâmetros pediam (name e lastName).  

Quando eu chamo `console.log( roger.fullName() );`, que é o método  
`MyFunction.prototype.fullName`, ele me retorna o nome completo, como esperado.  

Ou seja, o `this` dentro de

```JAVASCRIPT
MyFunction.prototype.fullName = function() {

    return this.name + ' ' + this.lastName;
}
```

representa o mesmo `this` que está sendo instanciado, porque estou utilizando o  
`.prototype`.  

Se eu não especificar o `.prototype`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.fullName());

})();
```
Isso me retorna que `roger.fullName` não é uma função:

[![error.jpg](https://s1.postimg.org/86e3j7i71r/error.jpg)](https://postimg.org/image/1a9fz0ywx7/)

Ou seja, eu não estou estendendo esse objeto, eu simplesmente criei um novo  
objeto e estou colocando em `MyFunction.fullName = function()` uma propriedade  
`fullName`. Então, estou dizendo que o `fullName` está sendo uma propriedade  
dessa função `MyFunction`.  

Se eu chamar o `MyFunction.fullName`, ele irá dizer que isso é um método  
existente:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(MyFunction.fullName);

})();
```

[![metodo-existente.jpg](https://s1.postimg.org/7ef9dgfncv/metodo-existente.jpg)](https://postimg.org/image/73sfkb0f7f/)

Então, quando eu utilizo o `.prototype`, estou estendendo essa função principal  
(`MyFunction`) e utilizando esse método `fullName`. Quando eu instancio o meu  
objeto `roger`, tenho acesso à esse método `fullName`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.fullName());

})();

// Roger Melo
```

## Criando propriedades depois de instanciar o objeto
Vou adicionar `MyFunction.prototype.age = 30;` após o instanciamento do objeto  
`var roger = new MyFunction('Roger', 'Melo');`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    MyFunction.prototype.age = 30;

    console.log(roger.fullName());

})();
```

O `.prototype` mantém esse objeto construtor vivo. Ou seja, sempre que eu  
adiciono uma propriedade, ainda que eu já tenha objetos instanciados na  
`MyFunction`, se eu adicionar mais uma propriedade com o `.prototype`, consigo  
ter acesso à essas propriedades.  

Vou tentar acessar, por exemplo, o `age` do objeto instanciado:  

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    var roger = new MyFunction('Roger', 'Melo');

    MyFunction.prototype.age = 30;

    console.log(roger.age);

})();

// 30
```

Me retornou o esperado, mesmo depois de ter instanciado o meu objeto. Isso será  
interessante quando eu estiver escrevendo as minhas próprias bibliotecas e eu  
quiser deixar outras pessoas estenderem a minha biblioteca e adicionar  
funcionalidades.  

Ou seja, eu crio as funcionalidades padrão da minha biblioteca e disponibilizo  
essa biblioteca para ser estendida, utilizando o `.prototype`.  

## Sobrescrevendo o .prototype

Se eu sobrescrever `age` com o `.prototype`, depois de criar a instância com o  
objeto, eu consigo sim sobrescrever a ação padrão:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    MyFunction.prototype.age = 30;

    var roger = new MyFunction('Roger', 'Melo');

    MyFunction.prototype.age = 20;

    console.log(roger.age);

})();

// 20
```

Ou seja, se em uma biblioteca houver uma propriedade padrão chamada `age`, que  
foi incluída no `.prototype`, consigo sobrescrevê-la.  

Mas, se eu declarar `this.age = 30` dentro do objeto, ou seja, dizendo que o   
objeto instanciado tem essa a propriedade e, se eu tento modificar o valor da  
propriedade usando o `MyFunction.prototype.age = 20`:

```JAVASCRIPT
(function() {
    'use strict';

    function MyFunction(name, lastName) {

        this.name = name;
        this.lastName = lastName;
        this.age = 30;
    }

    MyFunction.prototype.fullName = function() {

        return this.name + ' ' + this.lastName;
    }

    MyFunction.prototype.age = 20;

    var roger = new MyFunction('Roger', 'Melo');

    console.log(roger.age);

})();

// 30
```

Me retorna `30` pois, **propriedades de objeto se sobrepõem ou, são lidas antes  
das propriedades do `.prototype`**.  

Quando eu chamei o `console.log(roger.age);`, o JavaScript verificou se existe  
uma propriedade `age` no objeto. Se essa propriedade não existir, aí ele  
verifica no `.prototype` do objeto se essa propriedade existe. Ele só irá  
retornar `20` se eu retirar a propriedade do objeto.  

Isso é interessante para quando eu estiver fazendo a minha biblioteca e quiser  
utilizar valores padrão sem deixar que o usuário sobrescreva esses valores para  
outros métodos. O que ele quiser sobrescrever, terá estar fora das propriedades  
que eu especifiquei no objeto.  

Posso então, dar um nome para a minha biblioteca, uma versão, por exemplo, e,  
se alguém tentar mudá-los com o `.prototype`, essas propriedades não serão  
sobrescritas.
