# Eventos

## Posição dos `script` no `html` importa  
Suponhamos que ao invés de inserir um script no fim do `body`, ele seja inserido  
dentro do `head`.  

Quando atualizo a página, é mostrada uma mensagem que não é possível ler a  
propriedade appendiChild de null.  

Embora o `doc.body` exista, no momento em que o script é lido, o `body` ainda  
não foi carregado. Levando em consideração que o carregamento do html acontece  
de cima para baixo, **quando o browser encontra uma tag `script`, ele para todo  
o carregamento da tela, baixa o script, parseia o script e já executa o que  
tiver que ser executado.** Ou seja, o body não foi carregado mas o `script` já  
foi executado.  

Ou seja, se um script é colocado no `head` e ele tenta manipular elementos que  
ainda não existem na tela, esse tipo de erro irá acontecer.  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Ninja</title>
  <script src="js/main.js"></script>
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

</body>

</html>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var fragment = doc.createDocumentFragment();
  var childP = doc.createElement('p');
  var textChildP = doc.createTextNode('texto da tag p');

  childP.appendChild(textChildP);
  fragment.appendChild(childP);

  doc.body.appendChild(fragment);

})(window, document);
```

[![Untitled-1.jpg](https://s1.postimg.org/3wymsuoisv/Untitled-1.jpg)](https://postimg.org/image/1jw0bnapm3/)

## O evento `DOMContentLoaded`: resolvendo o problema de `scripts` no `head`  
É um evento do `document`. **Faz com que o `document` dispare esse evento  
exatamente quando todo o documento for carregado**.  

Isso independe de conteúdo interno no `html`, imagens, ou outro elemento que  
não foi carregado ainda. Ou seja, se há uma imagem gigante no `html`, por  
exemplo, esse evento será disparado antes da imagem ser totalmente carregada.  

**É um evento usado em casos onde é necessário manipular elementos html que  
ainda não estejam prontos / carregados para manipular**. Ou seja, é necessário  
apenas que o elemento exista na tela, independente se terminou de carregar ou  
não (como no exemplo da imagem, no parágrafo acima).  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function afterDomContentLoaded() {
    var fragment = doc.createDocumentFragment();
    var childP = doc.createElement('p');
    var textChildP = doc.createTextNode('texto da tag p');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    doc.body.appendChild(fragment);
  }

  doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);

})(window, document);
```

[![dom_Loaded.jpg](https://s1.postimg.org/630la93fan/dom_Loaded.jpg)](https://postimg.org/image/5743ustquj/)

Ou seja, a função só foi chamada depois que o DOM foi carregado. Mesmo com o  
`script` no `head`, esse script só foi executado após todo o conteúdo do DOM  
ser carregado.  

## Por que posicionar `script`'s no fim do `body`
1. Por que o evento `DOMContentLoaded` não estava sendo usado;
2. Se um script é deixado no `head`, o http1 faz com que quando uma tag de  
script existe, todo o carregamento da página pare até que esse script seja  
totalmente carregado e executado. Ou seja, se o script for grande, a página irá  
demorar a carregar.  

**Portanto, como boa prática, o script sempre deve ser mantido no final do  
`body`.**  

## Testes com imagens pesadas e o `DOMContentLoaded`
Para demonstração, usando o `DOMContentLoaded`, vou fazer com que um alert seja  
disparado antes de uma imagem pesada ser carregada:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Ninja</title>
</head>

<body>

  <div class="main" data-js="main">
    <header class="main-header" data-js="main-header">
      <h1 class="main-header__title">Título da página</h1>
      <img src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=2134&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
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

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function afterDomContentLoaded() {
    alert('hi!');
    var fragment = doc.createDocumentFragment();
    var childP = doc.createElement('p');
    var textChildP = doc.createTextNode('texto da tag p');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    doc.body.appendChild(fragment);
  }

  doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);

})(window, document);

// O ALERTA FOI EXIBIDO ANTES DA IMAGEM SER CARREGADA
```

Ou seja, o `DOMContentLoaded` executa o script sempre antes do fim do  
carregamento de um elemento que demore carregar. A tag `img` já existia mas  
a imagem ainda não tinha sido carregada.  

## O evento `load`  
Desde que o carregamento de um elemento `html` não seja assíncrono, esse evento  
**fará com que uma função só seja disparada após tudo o que estiver dentro do  
`window` ser carregado**.  

Se for necessário esperar uma imagem carregar, por exemplo, posso usar esse  
evento atrelado à `window`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function afterWindowLoad() {
    alert('hi!');
  }

  win.addEventListener('load', afterWindowLoad, false);

})(window, document);
```
