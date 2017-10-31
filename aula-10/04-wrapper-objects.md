# Wrapper Objects

## Valores primitivos não são objetos
Os valores primitivos são:  

[![valores-primitivos.png](https://s1.postimg.org/7bbxaveq5r/valores-primitivos.png)](https://postimg.org/image/2ajujb7vmz/)

Todos os outros tipos de valores em javascript são objetos.  

Um valor primitivo não possui propriedades e métodos, ele é um valor apresentado  
em sua forma final.  

## Definição de objeto
Se algo dentro do javascript possui propriedades e métodos, ele é um objeto.  

## Se valores primitivos não são objetos, por que eles tem propriedades?  
Posso usar a propriedade `length` em uma string, por exemplo:  

```JAVASCRIPT
(function() {

  var name = 'Roger';

  console.log(name.length);

})();

// 5
```

## Wrapper Objects / Objetos Construtores  
Ao criar um valor literal, o javascript envolve, por baixo dos panos, esse valor  
em um objeto.  

Ou seja, quando crio uma string literal, por baixo dos panos ele envolve essa  
string em um objeto do tipo string para que eu possa utilizar a propriedade  
`length`, por exemplo. Após o uso da propriedade length, o javascript descarta  
da memória esse objeto que envolveu a string.  

Construtores são funções que criam novos objetos. O javascript possui 3  
construtores para valores primitivos:  

[![construtores.png](https://s1.postimg.org/1bujwav9en/construtores.png)](https://postimg.org/image/52jphjk4m3/)

Ou seja, quando eu especifico `var name = 'Roger';`, por baixo dos panos, o  
JavaScript faz `var name = new String('Roger');`.  

Todo construtor é um objeto, e como todo objeto, possui propriedades e métodos.  

Ou seja, `name` agora é um objeto:  

```JAVASCRIPT
(function() {

  var name = new String('Roger');

  console.log(name);

})();

```

[![object_Name.jpg](https://s1.postimg.org/7srw2aim4f/object_Name.jpg)](https://postimg.org/image/2kwlfapm63/)

Então, se eu chamar `name.length`, 6 será o valor retornado.  

## Utilizando a palavra-chave `new`
Quando eu crio algo com a palavra chave `new`, isso sempre será um objeto, nunca  
um valor literal.  

## `.valueOf()`  
Quando utilizo o `new` para criar um novo objeto string, o método `valueOf()`  
retorna o valor literal da string:  

```JAVASCRIPT
(function() {

  var name = new String('Roger');

  console.log(name.valueOf());

})();

// 'Roger'
```

## Conversores - Wrapper Objects sem o `new`  

[![conversores.png](https://s1.postimg.org/838zlswien/conversores.png)](https://postimg.org/image/3d3qne4w17/)

Quando usados sem a palavra chave `new`, esses construtores se tornam  
conversores.  

```JAVASCRIPT
(function() {

  var myVar = String(10);

  console.log(myVar);

})();

// '10'
```
