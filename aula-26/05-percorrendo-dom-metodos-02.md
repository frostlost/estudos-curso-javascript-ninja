# Percorrer DOM - Métodos - parte 2

## `removeChild(child)`  
Esse método remove um elemento filho passado por parâmetro.  

Suponhamos que eu tenha o seguinte html e queira remover o `h1` do `header`:  

```HTML
<div class="main" data-js="main">
  <header class="main-header" data-js="main-header">
    <h1 class="main-header__title">Título da página</h1>
  </header>
</div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');
  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $h1 = $mainHeader.firstElementChild;

  $mainHeader.removeChild($h1);

})(window, document);
```

[![remove_Child.jpg](https://s1.postimg.org/5r3i68p1gv/remove_Child.jpg)](https://postimg.org/image/8ickebb5ij/)

## `.replaceChild(new, old)`  
Esse método substitui um elemento por outro.  

Recebe dois parâmetros:  
1. O elemento que irá substituir o atual  
2. O elemento atual que será substituído  

Suponhamos que no seguinte html, eu queira substituir o footer pelo main header:  

```HTML
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
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');
  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $mainFooter = doc.querySelector('[data-js="main-footer"]');

  $main.replaceChild($mainHeader, $mainFooter);

})(window, document);
```

[![replace_Child.jpg](https://s1.postimg.org/1wj96x3mzz/replace_Child.jpg)](https://postimg.org/image/10mrrgtyjv/)

Ou seja, como o header é um elemento já existente, ele simplesmente foi removido  
do lugar onde estava e substituiu o footer.  

Caso eu queira 2 headers (1 no lugar original e outro substituindo o footer),  
devo clonar o main header e substituir o footer por esse clone:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');
  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $cloneMainHeader = $mainHeader.cloneNode(true);
  var $mainFooter = doc.querySelector('[data-js="main-footer"]');

  $main.replaceChild($cloneMainHeader, $mainFooter);

})(window, document);
```

[![headerclone.jpg](https://s1.postimg.org/636nhw1mr3/headerclone.jpg)](https://postimg.org/image/1yb25s4gob/)

## `document.createTextNode(text)`
Esse método cria um nó de texto, recebendo como parâmetro o texto a ser criado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $newText = doc.createTextNode('opa!');

  console.log($newText);

})(window, document);

// 'opa!'
```

Suponhamos que eu queira adicionar esse novo texto como filho de um elemento:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');
  var $newText = doc.createTextNode('opa!');

  $main.appendChild($newText);

})(window, document);
```

[![new_Text_Node.jpg](https://s1.postimg.org/72b9ep8ffj/new_Text_Node.jpg)](https://postimg.org/image/72b9ep8fff/)

## `document.createElement(tagName)`  
Esse método cria um elemento html, recebendo como parâmetro o nome da tag a ser  
criada:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $newP = doc.createElement('p');

  console.log($newP);

})(window, document);

// <p></p>
```

Mesmo que esse novo elemento ainda não tenha sido inserido no DOM, posso  
manipulá-lo.  

Posso então inserir um nó de texto como filho desse elemento criado e inserir  
esse elemento como filho de um elemento já existente:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $main = doc.querySelector('[data-js="main"]');
  var $newP = doc.createElement('p');
  var newText = doc.createTextNode('novo p!');

  $newP.appendChild(newText);
  $main.appendChild($newP);

})(window, document);
```

[![create_Text_Node.jpg](https://s1.postimg.org/6vm2v9h9lr/create_Text_Node.jpg)](https://postimg.org/image/3mmyyltryz/)
