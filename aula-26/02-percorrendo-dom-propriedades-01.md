# Percorrer DOM - Propriedades - parte 1

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

## `.nodeType`
Traz um número baseado no tipo do nó que foi selecionado.  

Normalmente, são colocados em variáveis para facilitar a legibilidade.  

Se eu perguntar qual é o `nodeType` do `data-js="main-content"`, por exemplo,  
ele me trará um número:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.nodeType);

})(window, document);
```

## Tabela com os números dos nodeTypes

[![Node.node_Type_Refer_ncia_da_API_Web_MDN.png](https://s1.postimg.org/2mee88m4vz/Node.node_Type_Refer_ncia_da_API_Web_MDN.png)](https://postimg.org/image/11on8roxff/)

Ou seja, se eu fizer um `nodeType` no `document`, por exemplo, o número 9 será  
retornado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  console.log(doc.nodeType);

})(window, document);

// 9
```

## `.nodeValue`  
Traz o conteúdo textual dos elementos do tipo `text` e `comment`.  

Suponhamos que eu queira pegar o `texto1` do seguinte html:  

```HTML
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

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.firstChild.nodeValue);

})(window, document);
```

## Comentários também são nodes
Se eu fizer um `childNodes` no html abaixo, ele me traz o comentário como um  
node também:  

```HTML
<section class="main-content" data-js="main-content">
  Texto 1
  <!-- comentário -->
</section>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.childNodes);

})(window, document);
```

[![child_Nodes.jpg](https://s1.postimg.org/1q6fcfja9r/child_Nodes.jpg)](https://postimg.org/image/1x9n7v5fp7/)

Posso então pegar o texto do `<!-- comentário -->` com o `nodeValue`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.firstChild.nextSibling.nodeValue);

})(window, document);
```

Ou seja, posso encadear esses métodos.  

## `.nodeName`  
Traz o nome do nó selecionado. Se for uma tag, ele traz o nome dela, se for um  
texto, trará o `#text` e se for um comentário, trará o `#comment`:  

```HTML
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

  var $mainContent = doc.querySelector('[data-js="main-content"]');

  console.log($mainContent.nodeName);

})(window, document);

//  SECTION
```

## Suporte de features nos browsers

http://caniuse.com/

Neste site, posso consultar qualquer tipo de propriedade.  
