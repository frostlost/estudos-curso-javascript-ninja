# Técnicas Ninja

## Copiando um array com o `map()`
Suponhamos que eu tenha um array e queira copiá-lo.  

Posso usar o map, que cria um novo array baseado no array mapeado. Porém é um  
modo em que escrevo um método e uma função apenas para fazer uma cópia:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var arrCopy = arr.map(function(item) {
    return item;
  });

  console.log(arrCopy);
  console.log(arrCopy === arr);

})(window, document);
```

[![array_Copy.jpg](https://s1.postimg.org/4wlrc7batr/array_Copy.jpg)](https://postimg.org/image/1r69d9gvwr/)

## Copiando um array com o `slice()`
O `slice()` irá selecionar uma parte do array. Se eu passar `0` ou nenhum  
parâmetro, todos os itens do array serão retornados.  

A diferença é que estou fazendo a cópia de um array escrevendo apenas uma linha  
de código:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var arrCopy = arr.slice();

  console.log(arr);
  console.log(arrCopy);
  console.log(arr === arrCopy);

})(window, document);
```

[![array_Copy_Slice.jpg](https://s1.postimg.org/6if2g0hsq7/array_Copy_Slice.jpg)](https://postimg.org/image/45cfyt3zjf/)

## Copiando um array-like com o `Array.prototype.slice.call(arrayName)`
Suponhamos que eu tenha uma NodeList com elementos do DOM e quero convertê-la em  
um array de verdade.  

Posso tentar diretamente com o `slice()` mas não dará certo, pois o `slice()` é  
um método de array, e não de array-like.  

Para que a cópia e conversão do array-like para array ocorra, é necessário  
utilizar o `slice()` com o `Array.prototype`, usando o `call` para passar o  
`array-like` como o `this`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $divs = doc.querySelectorAll('div');
  var $divsCopy = Array.prototype.slice.call($divs);

  console.log($divsCopy);

})(window, document);
```

[![prototype_Slice.jpg](https://s1.postimg.org/8td4k6ua0f/prototype_Slice.jpg)](https://postimg.org/image/6gai2zggtn/)

## Manipulando o mesmo array com 2 referências diferentes  
Suponhamos que eu tenha um array e queira manipulá-lo com duas referências  
diferentes.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var arrRef2 = arr;

  arrRef2.push('item inserido pelo array 2');

  console.log(arrRef2);
  console.log(arr);

})(window, document);
```

[![object-manipulation.jpg](https://s1.postimg.org/1572ym79wv/object-manipulation.jpg)](https://postimg.org/image/3pcxb978iz/)

Ou seja, as duas variáveis apontam para o mesmo `array`.  

Qualquer tipo objeto pode ser manipulado por referência, function, array, etc...  

## Descobrindo o tipo real de um elemento  

### `.toString()` em arrays  
O método `.toString()` possui algumas peculiaridades.  

Quando usado como método de um array, ele retorna os itens do array como string,  
separando-os por vírgula.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log([1, 2, 3].toString());

})(window, document);
```

[![array_To_String.jpg](https://s1.postimg.org/7d99oy43gv/array_To_String.jpg)](https://postimg.org/image/895r4edrwr/)

### `.toString()` em objetos literais   
Quando usado como método de um objeto literal, ele retorna a string  
'[object Object]'.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log({}.toString());

})(window, document);

// '[object Object]'
```

Mas se eu usar esse método com um `array`, por exemplo, '[object Object]' também  
será retornado.  

## `Object.prototype.toString.call(thisObjName)` - Descobrindo o tipo real de um elemento  
Quando é possível utilizar o `prototype`, consigo passar o `this` para o método  
`.toString()`. Ou seja, consigo passar outros tipos de objetos (não-literais)  
como o `this` do `.toString()`.  

Usando essa técnica, é possível descobrir o tipo de qualquer objeto. Até a data  
da gravação dessa aula, é a maneira mais segura de se fazer isso.  

### Descobrindo se um objeto é do tipo `array`

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var arr = [1, 2, 3];
  console.log(Object.prototype.toString.call(arr));

})(window, document);

// '[object Array]'
```

### Descobrindo se um objeto é do tipo `function() {}`

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function myFunction() {

  }

  console.log(Object.prototype.toString.call(myFunction));

})(window, document);

// '[object Function]'
```

### Descobrindo se um objeto é do tipo `arguments`

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function myFunction() {
    console.log(Object.prototype.toString.call(arguments));
  }

  myFunction();

})(window, document);

// '[object Arguments]'
```

### Criando funções que verificam os tipos de objetos  
Primeiro, posso criar uma função que retorna o tipo de objeto de um elemento:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  }

  console.log(getObjType([1, 2, 3]));

})(window, document);

// '[object Array]'
```

Posso então, criar pequenas funções que comparam se essa string retornada dessa  
função `getObjType(obj)` é a de um tipo específico de objeto:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return getObjType(obj) === '[object Array]';
  }

  console.log(isArray([]));
  console.log(isArray(1));

})(window, document);

// true
// false
```

## Relembrando o `typeof`
O `typeof` deve ser usado apenas para valores primitivos.  

[![primitive.png](https://s1.postimg.org/4ysvkv8ntr/primitive.png)](https://postimg.org/image/4h2twa7a8r/)

Quando usado em um array, por exemplo, ele não especifica que é um array:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var arr = [1, 2, 3];
  console.log(typeof arr);

})(window, document);

// 'object'
```
