# Criação de Objetos

## Mutabilidade em objetos  
Diferentemente de valores literais, objetos são mutáveis. Se eu tenho um objeto  
e quero modificar o valor de uma propriedade, deletar uma propriedade ou incluir  
uma nova propriedade, eu posso fazê-lo.  

### Modificando o valor de uma propriedade de um objeto
Ou seja, ele continua sendo o mesmo objeto, mas posso modificar o valor de uma  
propriedade dele, por exemplo:  

```JAVASCRIPT
(function() {

  var obj = {
      prop1: 'prop1',
      prop2: 'prop2'
  };

  obj.prop1 = 'propriedade 1';

  console.log(obj);

})();

// {prop1: "propriedade 1", prop2: "prop2"}
```

### Criando uma nova propriedade para um objeto
```JAVASCRIPT
(function() {

  var obj = {
      prop1: 'prop1',
      prop2: 'prop2'
  };

  obj.prop3 = 'prop3';

  console.log(obj);

})();

// {prop1: "prop1", prop2: "prop2", prop3: "prop3"}
```

### Deletando uma propriedade de um objeto com o `delete`
Se eu usar a palavra-chave `delete`, consigo deletar uma propriedade de um  
objeto:  

```JAVASCRIPT
(function() {

  var obj = {
      prop1: 'prop1',
      prop2: 'prop2'
  };

  delete obj.prop2;

  console.log(obj);

})();

// {prop1: "prop1"}
```

Observação: o `delete obj.prop2;` retorna um valor booleano (`true`).  

## Manipulação de objetos por referência
Cada objeto criado é um objeto diferente. Mas, se eu criar uma variável que  
**recebe** um objeto, posso manipular esse objeto referenciando a variável.  

```JAVASCRIPT
(function() {

  var obj = {
      prop1: 'prop1',
      prop2: 'prop2'
  };

  var refVar = obj;

  console.log(refVar);

})();

// {prop1: "prop1", prop2: "prop2"}
```

Agora, `refVar === obj` is `true`. Ou seja, ambos são referência para o mesmo  
objeto.  

Então o mesmo objeto agora pode ser manipulado por `refVar` ou por `obj`:  

```JAVASCRIPT
(function() {

  var obj = {
      prop1: 'prop1',
      prop2: 'prop2'
  };

  var refVar = obj;

  refVar.prop3 = 'nova propriedade utilizando refVar como referência';

  console.log(obj);

})();

// {prop1: "prop1", prop2: "prop2", prop3: "nova propriedade utilizando refVar como referência"}
```

## Criação de objetos de forma literal
É o formato mais comum, que vem sendo feito desde as primeiras aulas:  

```JAVASCRIPT
(function() {

  var obj = {};

})();
```

## Criação de objetos como construtores (`new`)
Posso criar um objeto dessa forma, que é o mesmo que criar com o formato  
literal, porém, com a desvantagem de gastar mais tempo:  

```JAVASCRIPT
(function() {

  var obj = new Object();

  console.log(obj);

})();

// {}
```

## Criação de objetos com o `Object.create()`  

```JAVASCRIPT
(function() {

  var obj = Object.create();

  console.log(obj);

})();
```

Na próxima aula será visto por que um erro está sendo retornado.  

## `Object.prototype`
O Object possui uma propriedade chamada `prototype`, que é o protótipo do objeto  
que está sendo criado. Cada vez que um objeto é criado, ele herda propriedades  
do seu próprio protótipo, que pode ser acessado com `Object.prototype`.  

Cada objeto criado dentro do JavaScript herda propriedades de  
`Object.prototype`. Ele é o pai da herança de objetos.  

Em breve será visto mais sobre o `Object.prototype`.  
