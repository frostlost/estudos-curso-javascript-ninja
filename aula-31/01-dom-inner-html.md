# DOM - innerHTML 

## A propriedade `innerHTML` 
Essa propriedade pode ser um getter ou um setter.  

## `.innerHTML` como getter 
Ao utilizar essa propriedade como um getter, será retornada a string do nó dom que  
foi chamado.  

Suponhamos que eu tenha um html com apenas uma `div` e, dentro da div, um `h1` e um `p`.  

Eu posso pegar todo o conteúdo da `div` utilizando a `.innerHTML` como um setter. Ela  
irá retornar todo o conteúdo interno da `div` como uma `string`:  

```HTML 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inner HTML</title>
</head>
<body>

  <div class="main" data-js="main">
    <h1>Título</h1>
    <p>Parágrafo</p>
  </div>

  <script src="js/main.js"></script>

</body>
</html>
``` 

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');

  console.log($div.innerHTML);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33106791-2cda73b6-cf1b-11e7-9098-d5b28a5b00e4.png)

Se o `typeof` for utilizado no `console.log()`, será mostrado que o retorno do `.innerHTML`  
é uma string:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');

  console.log(typeof $div.innerHTML);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33106895-b60579e2-cf1b-11e7-90de-0b5b1f879040.png)

>Lembrando que o `typeof` pode ser utilizado com segurança para os tipos `string`, `number` e  
`boolean`.  

## `.innerHTML` como setter  
Quando utilizo essa propriedade como um setter, ela irá setar o valor de um elemento.  

Posso, por exemplo, setar o html interno da div, passando-o como uma `string`:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');

  $div.innerHTML = '<h2>Título 2</h2>';

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33107065-967ea444-cf1c-11e7-83ba-6011c529188e.png)

Ou seja, a string atribuída para `$div.innerHTML` foi automaticamente convertida para `html`.  

## `.innerHTML` - Fazendo com que o elemento permaneça com todo o html interno que ele já tem + o html setado 
Posso fazer isso utilizando o sinal de atribuição abreviada `+=` (como o retorno do `.innerHTML` é uma string,  
é possível concatená-la). Assim, todo o html que a div já tem será mantido e o html setado com o `.innerHTML`  
será adicionado no final do html da `div`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');

  $div.innerHTML += '<h2>Título 2</h2>';

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33107418-5439a294-cf1e-11e7-9eca-2bbb1e9ec091.png)


## `.innerHTML` vs. `textContent`
Se o mesmo exemplo acima fosse aplicado com o `textContent`, seria necessário criar o elemento  
`h2`, settar o `textContent` do `h2` e depois fazer com que esse `h2` seja filho da `div`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');
  var $h2 = doc.createElement('h2');

  $h2.textContent = 'Título 2';

  $div.appendChild($h2);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33107195-4a84d4a4-cf1d-11e7-9f0d-7ad23a74d9d5.png)

>Lembrando que o `.textContent` retorna, de fato, uma string.  

## Descobrindo o tipo de um objeto com o `toString` 
Se eu quiser saber o tipo de objeto de uma `div`, por exemplo, posso  
especificar:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var $div = doc.querySelector('[data-js="main"]');

  console.log(Object.prototype.toString.call($div));

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33106730-d1a28506-cf1a-11e7-9626-33223b41e0a2.png)
