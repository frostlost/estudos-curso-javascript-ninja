# Revisão do Desafio 29 - Parte 05 

## Código atual 

```JAVASCRIPT 
(function(win, doc, $) {
  'use strict';

  function app() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/curso-javascript-ninja/challenge-29/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app().isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();

        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();

})(window, document, window.DOM);
```

## Cadastrando um carro na tabela  
Basicamente, o que deve ser feito é, pegar todos os elementos do DOM (input values),  
e preencher a tabela com eles.  

Então, ao enviar o formulário, o `tbody` receberá uma nova `tr`.  

Mas antes, vou fazer com que, ao enviar o formulário, o `tbody`, capturado já com  
o método `get()` me trazendo apenas o próprio `tbody` como elemento, anexe como  
elemento filho a execução do método `createNewCar()`.  

O método `createNewCar` será responsável por retornar o elemento do DOM que será  
adicionado no `tbody`.  

Para testar, vou retornar um nó de texto com a string `oi`:  

```JAVASCRIPT 
      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(this.createNewCar());
      },

      createNewCar: function createNewCar() {
        return doc.createTextNode('oi');
      },
```

Só que, ao clicar no botão, um erro será retornado:  

![image](https://user-images.githubusercontent.com/29297788/32926321-c892cd9a-cb2d-11e7-92ea-98a785165cc2.png)

Ou seja, o `this` dentro do método `handleSubmit`, ao invés de referenciar o  
`app`, está referenciando o formulário, que é o objeto atrelado ao evento  
desse método. Posso confirmar isso fazendo um `console.log(this)`:  

```JAVASCRIPT 
      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        console.log(this);
        $tableCar.appendChild(this.createNewCar());
      },

      createNewCar: function createNewCar() {
        return doc.createTextNode('oi');
      },
```

![image](https://user-images.githubusercontent.com/29297788/32926416-379078f0-cb2e-11e7-8711-60ccbacf1dbc.png)

Ou seja, `createNewCar` não é uma função/método do form.  

Para que o código funcione corretamente e 'oi' seja inserido então dentro da  
tabela, devo utilizar o `app().nomeDoMetodo`:  

```JAVASCRIPT 
      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app().createNewCar());
      },

      createNewCar: function createNewCar() {
        return doc.createTextNode('oi');
      },
```

![image](https://user-images.githubusercontent.com/29297788/32926491-a23453fc-cb2e-11e7-8ca4-c46a2e5d067d.png)

## Evitando o uso repetitivo do app como function (`app().nomeDoMetodo`) 
Para evitar isso, posso fazer com que o `app()` retorne diretamente uma  
`IIFE`.  

Isso pode ser feito criando uma variável `app` que recebe o código da função  
`app`. Essa função, portanto, será auto-executável e agora posso chamar o `app`  
somente como próprio objeto. Porque como ele é uma função que se auto-executa,  
ele automaticamente atribui um objeto à ele mesmo (com o return) e pega as  
referências do `this` (`this.companyInfo();`, `this.initEvents();`) por ser  
uma closure. Ou seja, ele consegue guardar todos os estados e todas as  
referências por estar dentro de uma função.  

Só que essa função agora deve ser anônima ou receber outro nome, para  
que o JavaScript não confunda o nome `app` da função com o do objeto  
`var = app`:  

```JAVASCRIPT 
(function(win, doc, $) {
  'use strict';

  var app = (function appController() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        return doc.createTextNode('oi');
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/curso-javascript-ninja/challenge-29/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app.isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();

        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  })();

  app.init();

})(window, document, window.DOM);
```

![image](https://user-images.githubusercontent.com/29297788/32926879-c9956d26-cb30-11e7-9c01-9a2399dfb9d0.png)

## `document.createDocumentFragment()` - Criando os elementos do DOM a serem inseridos na tabela 
Vou criar um fragmento e, dentro do fragmento irei trabalhar com os novos elementos criados  
(tr e tds que servirão para cada item da tabela).  

Criado o fragmento, tr e todas as tds, cada td terá como conteúdo o valor dos inputs do formulário,  
cada td será anexada como filha da tr e essa função irá retornar a nova `tr` anexada ao `fragment`.  

Lembrando que, como o primeiro item da tr é uma imagem, vou criar um elemento img, usar um método  
que irá especificar um atributo e seu valor para essa imagem (atributo src e url do input). Depois  
irei anexar a imagem como filha da sua td:  

```JAVASCRIPT 
(function(win, doc, $) {
  'use strict';

  var app = (function appController() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');
        var $tdImage = doc.createElement('td');
        var $image = doc.createElement('img');
        var $tdBrand = doc.createElement('td');
        var $tdYear = doc.createElement('td');
        var $tdPlate = doc.createElement('td');
        var $tdColor = doc.createElement('td');

        // $image.src = $('[data-js="image"]').get().value; <- alternativa
        $image.setAttribute('src', DOM('[data-js="image"]').get().value);
        $tdImage.appendChild($image);

        $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
        $tdYear.textContent = $('[data-js="year"]').get().value;
        $tdPlate.textContent = $('[data-js="plate"]').get().value;
        $tdColor.textContent = $('[data-js="color"]').get().value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/curso-javascript-ninja/challenge-29/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app.isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();

        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  })();

  app.init();

})(window, document, window.DOM);
```

Também tomei algumas precauções no `css` para que a imagem não fique muito  
grande na tabela:  

```CSS
img {
  max-width: 200px;
  height: auto;
}
```

![image](https://user-images.githubusercontent.com/29297788/32928081-642b29ba-cb37-11e7-9bb1-5a9e14395e7b.png)
