# DOM - insertAdjacentHTML 

## `insertAdjacentHTML(position, htmlText)`
Este método faz, basicamente, o que a propriedade `.innerHTML` faz, porém, é possível  
escolher a posição onde o novo `html` será inserido. Essa é a grande vantagem do  
`insertAdjacentHTML(position, htmlText)`.  

`.innerHTML` e `insertAdjacentHTML(position, text)` são ambos propriedade e método  
disponíveis em um `HTMLElement`.  

## Tabela com as possíveis posições a serem passadas por parâmetro para o `insertAdjacentHTML(position, htmlText)`
![image](https://user-images.githubusercontent.com/29297788/33156196-85635962-cfde-11e7-9bec-90886835d673.png)

![image](https://user-images.githubusercontent.com/29297788/33156271-50318998-cfdf-11e7-92f1-b07a07bd02f9.png)

- beforebegin: O html do segundo parâmetro será adicionado **antes do início da tag**.  
- afterbegin: O html do segundo parâmetro será adicionado **depois do início da tag**. É o mesmo que usar o  
`insertBefore`.  
- beforeend: O html do segundo parâmetro será adicionado **antes do fechamento da tag**.  
- afterend: O html do segundo parâmetro será adicionado **após o fechamento da tag**.  

***

- Exemplo com o `beforebegin`:  

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/main.css">
  <title>Inner HTML</title>
</head>
<body>

  <div class="container">
    <form data-js="form" action="">
      <textarea data-js="text-area" rows="10" cols="50" type="text" autofocus></textarea>
      <button type="submit">Enviar</button>
    </form>

    <div class="main" data-js="main">
    </div>
  </div>

  <script src="js/main.js"></script>

</body>
</html>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('beforebegin', '<h1>My form</h1>');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156450-f2da7474-cfe0-11e7-8a8d-f64fd8ba0d87.png)

- Exemplo com o `afterbegin`:  
```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('afterbegin', '<h1>My form</h1>');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156475-387e8a7e-cfe1-11e7-96da-0792a5f34452.png)

- Exemplo com o `beforeend`:  
```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('beforeend', '<h1>My form</h1>');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156491-5bbc1754-cfe1-11e7-896d-a62d5dec517e.png)

- Exemplo com o `afterend`:  
```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('afterend', '<h1>My form</h1>');

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156508-75f158fa-cfe1-11e7-9934-ee765d6dbe5a.png)

## Problemas de segurança do `insertAdjacentHTML()` 
Esse método possui exatamente os mesmos problemas de segurança que o `innerHTML`.  
Ou seja, as mesmas medidas de segurança tomadas na utilização do `innerHTML` deve  
ser aplicadas no uso deste método também.  
[Detalhes sobre problemas de segurança com o innerHTML](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-31/02-dom-inner-html-seguranca.md)  

## `insertAdjacentHTML()` - inserindo um elemento do DOM como segundo parâmetro  
Ao tentar inserir um elemento capturado do DOM, ao invés de um `htmlText`, será feito um  
`toString` no elemento e o tipo do elemento será mostrado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('afterend', $form);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156611-9b73e6d2-cfe2-11e7-90fe-5773849de4b3.png)

## `console.dir(htmlElement)` - visualizando as propriedades disponíveis de um elemento html  
Essa propriedade traz um elemento html como objeto e permite que as propriedades disponíveis desse 
elemento sejam visualizadas:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  console.dir($form);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156763-ec37ce20-cfe3-11e7-9d4a-92cabda0ad92.png)

## `.outerHTML`
Essa propriedade traz a representação em string do elemento html em questão:  

![image](https://user-images.githubusercontent.com/29297788/33156857-d36ca37e-cfe4-11e7-9697-5da5434dea68.png)

Então, posso usar essa propriedade no elemento html em questão como segundo parâmetro  
do método `insertAdjacentHTML()`. Ao invés de utilizar o próprio elemento, posso usar  
`htmlElement.outerHTML`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');

  $form.insertAdjacentHTML('afterend', $form.outerHTML);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33156871-06682a5a-cfe5-11e7-9032-c0a1840a1af1.png)

>Lembrando que essa propriedade também pode ser usada com o `innerHTML`.  
