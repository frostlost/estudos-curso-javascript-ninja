# Percorrer DOM - Propriedades - parte 2

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
      <!-- comentário -->
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

## `.children`
Propriedade que retorna um `HTMLCollection`. Ao contrário do `childNodes`,  traz  
**apenas os elementos** filhos do elemento selecionado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main"]');

  console.log($element.children);

})(window, document);

// [header.main-header, section.main-content, footer.main-footer] (HTMLCollection)
```

Ela não faz parte da especificação da W3C mas é suportada em todos os browsers.  

## Diferenças entre `NodeList` e `HTMLCollection`
NodeLists consideram textos soltos, quebras de linha, espaços e comentários como  
elementos da lista. Ou seja, ela mostra todos os tipos de nós do elemento  
selecionado.  

HTMLCollections capturam e listam apenas os nós que são elementos html,  
desconsiderando textos, comentários, etc.  

## `.firstElementChild`
O contrário do `.firstChild`, essa propriedade retorna o **primeiro elemento  
filho** do elemento selecionado. Ignora nós de texto solto e de comentários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main-content"]');

  console.log($element.firstElementChild);

})(window, document);

// <div class="entry">
```

## `.lastElementChild`
Propriedade que retorna o **último elemento filho** do elemento selecionado.  
Ignora nós de texto solto e de comentários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main"]');

  console.log($element.lastElementChild);

})(window, document);

// <footer class="main-footer" data-js="main-footer">
```

## `.nextElementSibling`
Ao contrário do `.nextSibling`, essa propriedade retorna o **próximo elemento  
irmão** do elemento selecionado. Ignora nós de texto solto e de comentários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main"]');

  console.log($element.firstElementChild.nextElementSibling);

})(window, document);

// <section class="main-content" data-js="main-content">
```

## `.previousElementSibling`
Propriedade que retorna o **elemento irmão anterior** do elemento selecionado.  
Ignora nós de texto solto e de comentários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main-content"]');

  console.log($element.previousElementSibling);

})(window, document);

// <header class="main-header" data-js="main-header">
```

## `.childElementCount` ou `.children.length`
Propriedade que retorna a quantidade de **elementos filhos** do elemento  
selecionado.  Ignora nós de texto solto e de comentários:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main"]');

  console.log($element.childElementCount);

})(window, document);

// 3
```

## Métodos utilizados para manipular o DOM

### `.hasAttribute(attributeName)`  
Método que verifica se o elemento selecionado possui o atributo html  
especificado no parâmetro, retornando um valor booleano:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main"]');

  console.log($element.hasAttribute('data-js'));

})(window, document);

// true
```

### `.hasAttributes()`  
Método que verifica se o elemento selecionado possui qualquer atributo html,  
retornando um valor booleano:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $element = doc.querySelector('[data-js="main-content"]');

  console.log($element.firstElementChild.firstElementChild.hasAttributes());

})(window, document);

// false
```

## Boas práticas em nomes de funções  
Relembrando, métodos e funções, quando retornam um `boolean`, devem iniciar com  
`is`, `has`, `are` ou `have`, pois são verbos, em inglês, que significam `é`,  
`são`, `tem`, etc.  
