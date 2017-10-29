# Percorrer DOM - Atributos

## `element.id`
Manipula um atributo html padrão (`id`) de um elemento.  

Suponhamos que eu queira pegar o valor do `id` de um elemento html:  

```HTML
<div id="id-main" data-js="main">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.id);

})(window, document);

// id-main
```

## `element.className`
Manipula um atributo html padrão (`class`) de um elemento.  

Como o `class` é uma palavra reservada do ES6, `className` deve ser utilizado.  

Suponhamos que eu queira pegar o valor da `class` de um elemento html:  

```HTML
<div class="main" data-js="main">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.className);

})(window, document);

// main
```

## Especificando `element.id` ou `element.className` como setter
Ambas as propriedades são getters e setters. Ou seja, quando usados como  
especificados no código acima trazem o valor do atributo.  

Se especificados com uma atribuição, modificam os valores dos atributos.  

Modificando o valor do `id` do main:  

```HTML
<div id="id-main" class="main" data-js="main">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  $main.id = 'bife';

})(window, document);
```

[![element_Id.jpg](https://s1.postimg.org/15ykg6tei7/element_Id.jpg)](https://postimg.org/image/766qkx306j/)

## `.getAttribute(attrName)`
Com esse método é possível pegar o valor de **qualquer** tipo de atributo,  
passando por parâmetro o nome do atributo como string.  

Esse método sempre retornará uma string.  

```HTML
<div id="id-main" class="main" data-js="main">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.getAttribute('data-js'));

})(window, document);

// main
```

## `parseFloat(value)`
Esse método converte um valor em um número que pode ter casas decimais.  

Suponhamos que eu queira, ao invés de concatenar, somar duas strings numéricas  
retornadas pelo `getAttribute`.  

Posso converter essas strings para números utilizando o `Number(stringName)` ou  
posso utilizar o `parseFloat`:  

```HTML
<div data-js="main" data-number1="1.8" data-number2="2.5">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log(
    parseFloat($main.getAttribute('data-number1')) +
    parseFloat($main.getAttribute('data-number2'))
  );

})(window, document);

// 4.3
```

## `parseInt(value, int)`
Esse método converte um valor em um número que ignora casas decimais. Ou seja,  
sempre considera e retorna números inteiros.  

Recebe um segundo parâmetro que representa um número decimal.  

```HTML
<div data-js="main" data-number1="1.8" data-number2="2.5">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log(
    parseInt($main.getAttribute('data-number1'), 10) +
    parseInt($main.getAttribute('data-number2'), 10)
  );

})(window, document);

// 3
```

Mais à frente o `parseInt` será abordado com detalhes.  

## `setAttribute(attr, value)`
É um método que modifica o valor de um atributo já existente ou cria um novo  
atributo e valor.  

Substituindo o valor de um atributo que já existe em um elemento html:  

```HTML
<div data-js="main" class="main-class">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  $main.setAttribute('class', 'nome-substituido');

})(window, document);
```

[![set_Attribute.jpg](https://s1.postimg.org/8djefbh2tr/set_Attribute.jpg)](https://postimg.org/image/6stnfujvd7/)

Inserindo um novo atributo e valor à um elemento html:  

```HTML
<div data-js="main" class="main-class">

  <!-- ... -->

</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  $main.setAttribute('data-js2', '2');

})(window, document);
```

[![set_Attribute2.jpg](https://s1.postimg.org/3h0gdtetjz/set_Attribute2.jpg)](https://postimg.org/image/2l3yyd553v/)
