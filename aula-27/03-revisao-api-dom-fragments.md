# Revisão da API DOM e DOM fragments

## API DOM - Relembrando  

[![dom.png](https://s1.postimg.org/5f22eov7fz/dom.png)](https://postimg.org/image/35j1v7agyz/)

Cada elemento da árvore é um nó. Esses nós podem ser um `elemento`, um nó de  
`texto`, um nó de `comentário` ou o próprio nó do documento.  

Ao manipular esses nós, tenho uma `nodelist`. Ao manipular um grupo de elementos  
html, tenho uma `htmlcollection`. Os dois são `array-like`. Podem ser  
manipulados como arrays, possuem o atributo length, por exemplo, mas não são  
arrays verdadeiros.  

### Lista de propriedades do DOM que incluem nós de texto e comentários
[![prop.png](https://s1.postimg.org/1zp9eyd5m7/prop.png)](https://postimg.org/image/7enrxdsazv/)

### Lista de propriedades do DOM que incluem apenas elementos
[![prop.png](https://s1.postimg.org/74qgwkflb3/prop.png)](https://postimg.org/image/4rnufd1s4b/)

[![prop.png](https://s1.postimg.org/7fdapq0lsf/prop.png)](https://postimg.org/image/8pg7w1il3f/)

### Lista de métodos do DOM
[![met.png](https://s1.postimg.org/7mt9zbvenj/met.png)](https://postimg.org/image/7qcvx1ohd7/)

### Lista de métodos do DOM - document
[![met.png](https://s1.postimg.org/6kj3gs7nun/met.png)](https://postimg.org/image/1jr0p80tbv/)

### Lista de propriedades que pegam atributos html válidos
[![att.png](https://s1.postimg.org/19gya8ndpb/att.png)](https://postimg.org/image/2cgnl4j7kr/)

### Lista de propriedades que pegam qualquer atributo html
[![att.png](https://s1.postimg.org/2jwmuqf30v/att.png)](https://postimg.org/image/1v3daprk0b/)

## `document.createDocumentFragment()` - Manipulando elementos do DOM com performance
Manipulações de DOM são lentas, pois exigem que o browser renderize novamente os  
elementos, ajustando o fluxo dos elementos, de forma que o elemento manipulado  
não quebre o documento.  

O método `document.createDocumentFragment()` cria um fragmento de documento em  
branco para que seja possível manipular os nós. Assim que a manipulação dos nós  
é concluída, posso incluí-los no html. Isso melhora a performance pois, a  
manipulação dos elementos é trabalhada fora do DOM e a inclusão dos elementos é  
feita de uma vez.  

`.parentNode === null` - o document fragment não possui pai.  

## `document.createDocumentFragment()` - incluindo um fragmento no DOM

```HTML
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
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var fragment = doc.createDocumentFragment();

  // ... código da inserção de elementos ...

  doc.body.appendChild(fragment);

})(window, document);

```

Após criado, e inserido dentro do body, posso adicionar elementos à esse  
fragmento.  

Suponhamos que eu queira criar uma tag `p`, com um texto dentro e inserí-la  
dentro do fragmento do documento:  

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

[![document_Fragment.jpg](https://s1.postimg.org/2nvk292rm7/document_Fragment.jpg)](https://postimg.org/image/2kby4j9owb/)

É importante ressaltar que o fragment não é um elemento, como uma `div`. Ele é  
um envoltório, um elemento simbólico. Apenas o conteúdo dele irá ser adicionado  
no DOM.  
