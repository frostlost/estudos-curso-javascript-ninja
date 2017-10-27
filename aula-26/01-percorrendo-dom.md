# O que é DOM e como percorrer os elementos da árvore

## API DOM
Definição de Document Object Model: Modelo do documento em formato de objeto.  

[![dom.jpg](https://s1.postimg.org/13enfqyu8v/dom.jpg)](https://postimg.org/image/5mgoiq4b6j/)

A API DOM é utilizada todas as vezes em que eu preciso manipular um elemento  
`HTML` ou `XML`.  

A API DOM transforma cada elemento de um documento em um nó, fazendo com que eu  
consiga manipular cada um desses nós separadamente.  

Eu consigo manipular, separadamente, por exemplo, um **texto** que está dentro de  
uma tag `<title>` ou de uma tag `<a>`. Atributos como o `href` também podem ser  
manipulados pois eles também são elementos, são nós do DOM.  

## Percorrendo elementos do DOM

### `.parentNode`

É uma propriedade que pega o nó que é Pai do elemento selecionado.  

Suponhamos que eu queira, selecionando a `<div class="main" data-js="main">`,  
**pegar o elemento Pai** dessa `div` no html abaixo:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <title>JS Ninja</title>
</head>

<body>

  <div class="main" data-js="main">
    <header class="main-header" data-js="main-header">
      <h1 class="main-header__title">Título da página</h1>
    </header>

    <section class="main-content" data-js="main-content">
      Texto 1
      <div class="entry">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, molestias cum ipsam enim distinctio libero voluptatum nobis modi neque praesentium quas, magni placeat aliquid, hic veniam error perspiciatis, a corporis!</p>
      </div>
      Texto 2
    </section>

    <footer class="main-footer" data-js="main-footer">
      <small class="main-footer__copyright">
        2015 &copy; Todos os direitos reservados
      </small>
    </footer>
  </div>

  <script src="js/main.js"></script>

</body>

</html>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.parentNode);

})(window, document);

// mostrou o elemento body no console
```

### `.childNodes`
Traz todos os nós filhos do elemento selecionado.  

O esperado é que, ao selecionar a `<div class="main" data-js="main">`, por  
exemplo, seja trazida uma nodelist com  
`<header class="main-header" data-js="main-header">`,  
`<section class="main-content" data-js="main-content">` e  
`<footer class="main-footer" data-js="main-footer">`, mas não é o que acontece:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.childNodes);

})(window, document);
```

[![child_Nodes.jpg](https://s1.postimg.org/1blk0vwjvj/child_Nodes.jpg)](https://postimg.org/image/846lncmra3/)

### `.firstChild`
Traz o primeiro filho do elemento selecionado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.firstChild);

})(window, document);
```

### `.lastChild`
Traz o último filho do elemento selecionado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.lastChild);

})(window, document);
```

### `.nextSibling`
Traz o próximo irmão do elemento selecionado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.nextSibling);

})(window, document);
```  

### `.previousSibling`  
Traz o irmão anterior do elemento selecionado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.previousSibling);

})(window, document);
```

### Os text Nodes de `.childNodes`, `.firstChild` e `.lastChild`
Text Nodes são nós que possuem um enter (quebra de linha) como valor:  

[![child_Nodes.jpg](https://s1.postimg.org/5hjfjidvwv/child_Nodes.jpg)](https://postimg.org/image/8fvpn0m5e3/)

Ou seja, as quebras de linha do html também são contadas como nós. Se eu removo  
as quebras de linha no html, consigo então uma nodelist com apenas os filhos do  
elemento selecionado:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <title>JS Ninja</title>
</head>

<body>

  <div class="main" data-js="main"><header class="main-header" data-js="main-header">
      <h1 class="main-header__title">Título da página</h1>
    </header><section class="main-content" data-js="main-content">
      Texto 1
      <div class="entry">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, molestias cum ipsam enim distinctio libero voluptatum nobis modi neque praesentium quas, magni placeat aliquid, hic veniam error perspiciatis, a corporis!</p>
      </div>
      Texto 2
    </section><footer class="main-footer" data-js="main-footer">
      <small class="main-footer__copyright">
        2015 &copy; Todos os direitos reservados
      </small>
    </footer></div>

  <script src="js/main.js"></script>

</body>

</html>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');

  console.log($main.childNodes);

})(window, document);
```

[![nodes.jpg](https://s1.postimg.org/2a0n5d54f3/nodes.jpg)](https://postimg.org/image/7ecbun51nf/)
