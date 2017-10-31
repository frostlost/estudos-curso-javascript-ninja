# Revisão desafio da semana #26 - Parte 1

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <a data-js="link" href="">Link 1</a>
  <a data-js="link" href="">Link 2</a>

  <script data-js="script" src="challenge-26.js"></script>
</body>
</html>
```

```JAVASCRIPT
/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!

Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.

Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/

var $a = new DOM('[data-js="link"]');

$a.on('click', function(e) {
  e.preventDefault();
  console.log('clicou');
});

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);
```

## O nome da lib deve ser "DOM". Ela deve ser uma função construtora, que receberá uma string por parâmetro. Essa string será o nó do DOM a ser selecionado; No construtor, você deve atribuir à `this.element` todos os elementos do DOM selecionados;

Como parâmetro da função construtora, vou utilizar `elements`, pois há a  
possibilidade de que apenas um ou vários elementos sejam selecionados.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```

## Extenda a lib para ter os métodos `on`, `off` e `get`  
Para estender a lib, é necessário usar o `prototype`. Isso irá fazer com que um  
método seja criado. A partir disso, os métodos passam a existir na lib.  

Ou seja, todas as vezes que eu chamar o `new DOM`, terei esses métodos  
disponíveis.  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on() {};
  DOM.prototype.off = function off() {};
  DOM.prototype.get = function get() {};

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```
