# Module Pattern - Parte 02  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status-msg"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleFormSubmit);

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch(e) {
        result = null;
      }
      return result;
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
    }

  }

  win.app = app;
  app();

})(window, document, window.DOM);
```

## Revealing Module Pattern 
É um formato de module pattern utilizado quando é necessário exportar algumas funções  
para que elas sejam utilizadas fora. Ou seja, ele irá revelar apenas os métodos  
necessários.  

Suponhamos que eu queira fazer com que os métodos `getMsg(type)` e `replaceCep(str)`  
sejam exportados, e que eu possa utilizá-los no `app()`. Para isso, eu retornar um  
objeto no final da função `app()`. Este objeto terá as propriedades `getMsg` e  
`replaceCep` e seus valores serão as funções referenciadas:  

```JAVASCRIPT 
    return {
      getMsg: getMsg,
      replaceCep: replaceCep
    };
```

Agora, como `app` foi exportado para o `window`, tenho `window.app` disponível:  

![image](https://user-images.githubusercontent.com/29297788/32700774-bc1b464e-c7b0-11e7-80b7-f6091678ceeb.png)

Lembrando que posso chamar apenas `app` no console, sem a necessidade do `window.`  
na frente:  

![image](https://user-images.githubusercontent.com/29297788/32700783-faa09252-c7b0-11e7-80e0-c39ef899e08e.png)

Se eu executar a função `app` agora, ela irá retornar um objeto com os métodos `getMsg`  
e `replaceCep`, que são, exatamente, os dois métodos exportados acima:  

![image](https://user-images.githubusercontent.com/29297788/32700795-435bad6a-c7b1-11e7-8b53-40dd6a0031be.png)

### Restringindo o acesso à métodos de uma função 
Se eu quiser que uma pessoa não tenha acesso aos outros métodos da função `app`, ou  
seja, acesso ao restante do código ao simplesmente chamar `app` no console,  

![image](https://user-images.githubusercontent.com/29297788/32700826-b6cd1e96-c7b1-11e7-9a86-df274243e506.png)

ou seja, se eu não quiser isso mas, quiser que a pessoa acesse diretamente apenas os  
métodos exportados, posso passar a execução da função ao exportá-la para o `win.app`:  

```JAVASCRIPT 
  win.app = app();
```

Se eu acessar o `app` agora, apenas o objeto com os métodos exportados será retornado, pois  
o que está sendo passado para o `win.app` é valor de retorno da função `app`:    

![image](https://user-images.githubusercontent.com/29297788/32700846-12996be4-c7b2-11e7-9df8-a5ae8b8dda61.png)

Agora consigo usar o método `replaceCep()`, por exemplo, que troca o `[CEP]` de uma string,  
fazendo a limpeza do cep. Se eu passar um cep no input e utilizar o `replaceCep()` no console,  
consigo pegar o valor do cep:  

![image](https://user-images.githubusercontent.com/29297788/32700902-04d2bf1e-c7b3-11e7-8ab4-0bce0cddd26b.png)

## O conceito de Closures 
Sempre que tenho uma função no JavaScript, ela cria um contexto. Quando uma outra função  
é criada dentro dessa primeira função, essa segunda função tem acesso a tudo o que está  
dentro dela e também a tudo o que está fora. E essa segunda função consegue guardar para  
si tudo o que eu chamar de fora.  

```JAVASCRIPT 
  function replaceCep(str) {
    return str.replace('[CEP]', clearCep());
  }
``` 

Este método acima, por exemplo, está usando a função `clearCep()`. A função `clearCep()`  
pega o valor do input do cep e substitui tudo o que não é número por espaço em branco.  
Só que, quando chamo o `app.replaceCep()` no console, a função `clearCep()` não existe  
nos métodos exportados.  

Se eu chamar o `app.replaceCep('[CEP]')` no console, ele consegue pegar o valor do cep  
no input ainda que esse cep não seja submetido. Isso ocorre porque, como a função  
`replaceCep()` está dentro do `window.app`, que está sendo executada ao ser exportada  
para o `window`, o `replaceCep()` funcionará como uma closure que está guardando o  
valor de `clearCep()`:  

![image](https://user-images.githubusercontent.com/29297788/32700977-d1edeedc-c7b4-11e7-9579-6a0d95d21ba9.png)

Ou seja, o javascript consegue ter acesso ao input ainda que eu não tenha acesso direto  
à ele por meio do objeto com o método `replaceCep()`. Isso é o conceito de closure, ou seja,  
o `replaceCep()` acessou todo o escopo fora dele e guardou esse valor.  

## Código final 
```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status-msg"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleFormSubmit);

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch(e) {
        result = null;
      }
      return result;
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
    }

    return {
      getMsg: getMsg,
      replaceCep: replaceCep
    };

  }

  win.app = app();
  app();

})(window, document, window.DOM);
```
