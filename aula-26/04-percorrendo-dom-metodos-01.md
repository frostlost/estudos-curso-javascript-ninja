# Percorrer DOM - Métodos - parte 1

## `.appendChild(child)`
Esse método adiciona um último filho dentro do elemento selecionado. Recebe como  
parâmetro quem é o filho a ser adicionado.  

Quando o parâmetro do `.appendChild(child)` é um elemento já existente, esse  
elemento é removido do lugar onde ele está.  

Suponhamos que eu tenha o html abaixo e eu queira pegar o  
`<header class="main-header" data-js="main-header">` e jogá-lo como último filho  
do `<section class="main-content" data-js="main-content">`:  

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
  </div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $mainContent = doc.querySelector('[data-js="main-content"]');

  $mainContent.appendChild($mainHeader);

})(window, document);
```

[![append_Child.jpg](https://s1.postimg.org/9hz1017c1r/append_Child.jpg)](https://postimg.org/image/1x13vu0iwr/)

## `.insertBefore(node, beforeWho)`
Esse método adiciona um elemento antes de outro elemento, dentro de um elemento.  

`elementoContainer.insertBefore` - `elemento` é o elemento que eu quero colocar  
algo dentro dele.  

O método recebe dois parâmetros:  

1. Nó a ser inserido.  
2. Antes de quem o nó deve ser inserido.  

Suponhamos que eu tenha o html abaixo e quero pegar o  
`<header class="main-header" data-js="main-header">` e inserí-lo como filho do,  
`<section class="main-content" data-js="main-content">`, antes do `Texto 1`:  

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
  </div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $mainContent = doc.querySelector('[data-js="main-content"]');
  var $texto1 = $mainContent.firstChild;

  $mainContent.insertBefore($mainHeader, $texto1);

})(window, document);
```

[![insert_Before.jpg](https://s1.postimg.org/9d1nffvzq7/insert_Before.jpg)](https://postimg.org/image/1hgwi39yfv/)

## `.cloneNode(boolean)`
Esse método clona um nó já existente.  

Recebe um parâmetro do tipo `boolean`. `true` especifica que todo o conteúdo de  
dentro da tag também será clonado. `false` especifica que apenas a abertura e o  
fechamento da tag serão clonados.  

No html abaixo, suponhamos que eu queira clonar o  
`<header class="main-header" data-js="main-header">`:  

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
  </div>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');

  console.log($mainHeader.cloneNode(true));

})(window, document);
```

[![clone_Node.jpg](https://s1.postimg.org/9u26boma7j/clone_Node.jpg)](https://postimg.org/image/5sq6xai6uj/)

O elemento mostrado no console já é o clone. Se eu comparar o elemento logado  
com o elemento original, `false` é retornado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');

  console.log($mainHeader.cloneNode(true) === $mainHeader);

})(window, document);

// false
```

Se eu apenas clonar o elemento mainHeader, sem fazer o `.appendChild()`, e  
mostrar no console a quantidade de elementos mainHeader, utilizando o  
array-like que o `doc.querySelectorAll` me traz, `1` será mostrado, pois o  
elemento clonado não foi inserido em lugar nenhum do DOM:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');

  $mainHeader.cloneNode(true);
  console.log(doc.querySelectorAll('[data-js="main-header"]').length);

})(window, document);

// 1
```

Então, posso armazenar esse clone em uma variável e inserir esse clone dentro do  
mainContent:  

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
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $mainContent = doc.querySelector('[data-js="main-content"]');
  var $cloneMainHeader = $mainHeader.cloneNode(true);

  $mainContent.appendChild($cloneMainHeader);

  console.log(doc.querySelectorAll('[data-js="main-header"]'));

})(window, document);
```

[![clone_Node_append_Child.jpg](https://s1.postimg.org/8popdxc9bz/clone_Node_append_Child.jpg)](https://postimg.org/image/4a6a8nzv3v/)

[![main_Content_Length.jpg](https://s1.postimg.org/9849uum5f3/main_Content_Length.jpg)](https://postimg.org/image/11wp4ckvzf/)

## `.hasChildNodes()`
Esse método verifica se o elemento selecionado possui algum nó filho.  

Vou fazer essa verificação no  
`<h1 class="main-header__title">Título da página</h1>`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainHeader = doc.querySelector('[data-js="main-header"]');
  var $h1 = $mainHeader.firstElementChild;

  console.log($h1.hasChildNodes());

})(window, document);

// true
```

`true` é retornado pois o nó filho do `h1` é o seu texto 'Título da página'.  
