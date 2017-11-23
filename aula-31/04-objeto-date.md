# O objeto date 

## [devdocs.io](http://devdocs.io/)
Sempre que houver dúvidas ou necessidade de encontrar informações sobre  
características de uma linguagem, esse site é o mais recomendado para  
encontrar documentações. Uma das grandes vantagens é que é possível  
baixar as documentações localmente e acessá-las offline.  

![image](https://user-images.githubusercontent.com/29297788/33158065-e25ff0c6-cfed-11e7-9742-83708679ca64.png)

## `new Date()` - Criando e instanciando uma nova data  
É um objeto utilizado ao trabalhar com datas dentro do JS. Ele é um  
construtor, deve ser invocado com o `new` e instanciado em uma nova  
data:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var date = new Date();

  console.log(date);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33176846-a93e8c08-d047-11e7-84b5-1c474d1c25e3.png)

## `new Date()` - Construindo e manipulando uma nova data através de parâmetros 
Esse objeto permite que alguns parâmetros sejam passados. Os parâmetros  
seguem uma ordem específica, sendo obrigatória a atribuição de um valor para  
todos. São eles:  

1. year
2. month
3. day
4. hour
5. min
6. sec
7. milliseconds 

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var year = 2017;
  var month = 10;
  var day = 23;
  var hour = 12;
  var min = 19;
  var sec = 45;
  var milliseconds = 9;

  var date = new Date(year, month, day, hour, min, sec, milliseconds);

  console.log(date);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33177145-c476b2b0-d048-11e7-9168-a315fdae8657.png)

## `new Date()` - A contagem dos meses  
No objeto date, os meses são zero based. Então, como os meses vão de 0 à 11, 
Janeiro, por exemplo, se refere ao mês `0` e Dezembro ao mês `11`.  

## `arrayMonths.indexOf(monthName)`

A vantagem disso é que posso criar, por exemplo, um array com os meses do ano  
e atribuir um valor para o mês do objeto baseado no index desse array, através  
do método `indexOf()`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  var year = 2017;
  var month = months.indexOf('Novembro');
  var day = 23;
  var hour = 12;
  var min = 19;
  var sec = 45;
  var milliseconds = 9;

  var date = new Date(year, month, day, hour, min, sec, milliseconds);

  console.log(date);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33177527-03cf57b8-d04a-11e7-8cb6-7838d23e5b7b.png)

Ou seja, essa técnica pode ser utilizada ao pegar dados de um banco de dados  
ou de uma entrada do usuário, por exemplo.  

## `new Date()` - A contagem dos dias  
A contagem dos dias vão até `30` ou `31`.  

Se o mês em questão possui `30` dias e for especificado `31` no date, o construtor  
atualiza para o próximo dia automaticamente. Ou seja, 01 de Dezembro:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  var year = 2017;
  var month = months.indexOf('Novembro');
  var day = 31;
  var hour = 12;
  var min = 19;
  var sec = 45;
  var milliseconds = 9;

  var date = new Date(year, month, day, hour, min, sec, milliseconds);

  console.log(date);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33177837-2b022b66-d04b-11e7-9f93-2f473a0c1f28.png)

## `new Date()` - A contagem dos Meses - Parte 02
O mesmo efeito de contagem dos dias, acontece com os meses.  

Caso o mês de Dezembro seja especificado com `12`, por exemplo, o mês do date  
é, automaticamente, atualizado para o mês de Janeiro do próximo ano:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  var year = 2017;
  var month = 12;
  var day = 23;
  var hour = 12;
  var min = 19;
  var sec = 45;
  var milliseconds = 9;

  var date = new Date(year, month, day, hour, min, sec, milliseconds);

  console.log(date);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/33177968-922c9fec-d04b-11e7-8d96-ecce3a5cc903.png)

Ou seja, com esse formato é prático somar ou adiantar meses, dias e anos, por exemplo.  
