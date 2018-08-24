# Introdução à JavaScript no browser 

# `<script>` dentro de `<head>`
- Perde performance
- O browser irá ler todo o script primeiro 
  - Só irá carregar a página depois de ler o script 
- Sempre utilizar o script no fim do body 

# Por que utilizar script externo 
- `<script src="url...">`
- Por que possibilita que o navegador faça cache 
  - Na próxima vez que a página for acessada, o script será pego  
  da memória, não será necessário carregá-lo novamente 
- Caso o script apenas seja escrito dentro das tags script,  
toda vez que o navegador baixar o index.html, o script também  
será baixado (`<script>...</script>`)

# Escopo 
- Exemplo de variáveis criadas em escopo global: 
  - Criar uma **let ou const** `name` em `main.js`
  - Criar um outro arquivo js `main2.js`
    - Importá-lo no html 
  - Em `main2.js`, dar um `console.log()` na variável name, criada  
  no arquivo `main.js` [1]
  - A let `name` foi criada em escopo global, ou seja, não foi criada  
  dentro de uma função, por isso ela é acessível em outro arquivo 
    - Isso é um problema devido à possibilidade de sobrescrita de  
    variáveis com o mesmo nome 
    - Lembrando que, dentro do JS, funções criam escopo 
- A vantagem de utilizar IIFE é que ela torna os scripts locais 
  - Ou seja, o tipo de problema visto no exemplo [1] não acontece  
  [2]
- Nunca utilizar var, let ou const em escopo global 

[1]

```javascript
// main.js
let name = 'roger' // pendurou a let em escopo global 

// main.js
console.log(name) 
// 'roger'
```

[2]

```javascript
// main.js
(function () {

let name = 'roger'

})()

// main2.js
console.log(name)
// 
```

# `window` - O Objeto global do browser 
- É o objeto que possui todas as propriedades e métodos que são acessados  
sem referenciar qualquer tipo de objeto 
- Tudo o que faz parte da base do JS está pendurado no objeto `window`

```javascript
console.log(window)
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

# O objeto `this`
Referencia/representa coisas diferentes, dependendo de onde ele está  
ou da forma que for acessado. 

Aponta para 'este' objeto em que ele está dentro. 

- **Em métodos de objetos:** referencia o objeto 
  - Exemplo básico [1]
  - Exemplo básico acessando uma propriedade do objeto [2]

- **Em funções.** Pode ter 2 valores: 
  - 1 - **Referência ao objeto global** [3], mesmo com a IIFE 
    - Sempre que uma função não está dentro de um objeto (não é um  
     método), o `this` irá referenciar o objeto global [3]
  - 2 - **Referência ao objeto instanciado** 
    - Construtores em JS (próximo título abaixo)


[1]

```javascript
const obj = {
  prop1: 'prop1 value',
  init: function () {
    return this
  }
}

console.log(obj.init())
// {prop1: "prop1 value", init: ƒ} - retornou o próprio objeto 
```

[2]

```javascript
  const obj = {
    prop1: 'prop1 value',
    init: function () {
      return this
    }
  }

  console.log(obj.init().prop1)
  // 'prop1 value'
```

[3]

```javascript
(function () {
  function myFunction () {
    return this
  }

  console.log(this)
  // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

  console.log(this === window)
  // true
})()
```

# Construtores em JS
- O formato de construtor: 
  - `new Object()` [1]
  - Criou um novo objeto na memória 
  - Esse é um construtor padrão do JS 

[1]

```javascript
const obj = new Object()

obj
// {}
```

## **Criando construtores personalizados** 
Criam novos objetos construídos com propriedades default. 

- Criar um construtor personalizado
  - Declarar uma função `MyConstructor`
    - Geralmente, começam com letras maiúsculas, por convenção 
  - Declarar um this.prop1, que recebe uma string 
  - Declarar um this.prop2, que recebe uma string 
  - A função **retorna nada** 
  - **Agora, ao declarar a palavra-chave `new` e invocar a função**  
  construtora, um novo objeto será criado, com as propriedades que  
  foram definidas dentro da função construtora [1]
  - À partir de uma função construtora, é possível instanciar  
  vários objetos que possuam as propriedades que foram declaradas  
  dentro dela [2]

[1]

```javascript
function MyConstructor () {
  this.prop1 = 'value 1';
  this.prop2 = 'value2';
}

new MyConstructor()
// MyConstructor { prop1: 'value 1', prop2: 'value2' }
```

[2]

```javascript
const obj1 = new MyConstructor()
const obj2 = new MyConstructor()

obj1
// MyConstructor {prop1 = 'value 1', prop2 = 'value 2'}

obj2
// MyConstructor {prop1 = 'value 1', prop2 = 'value 2'}
```

# O objeto `arguments`
Representa todos os argumentos passados na invocação da função [2]

- Aparece, **implicitamente, dentro de funções**

- É um objeto array-like [1]
  - Parecido com um array
  - Funciona como um array
  - **Não é um array**

- Como é um objeto array-like, através da notação de array, é possível  
acessar apenas um valor passado por argumento [3]

[1]

```javascript
function myFunc () {
  return arguments
}

myFunc()
// []
```

[2]

```javascript
function myFunc (param1, param2) {
  return arguments
}

myFunc(5, 'oi')
// Arguments(2) [5, "oi", callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

[3]

```javascript
function myFunc (param1, param2) {
  return arguments[1]
}

myFunc('hello!', 'hi')
// 'hi'
```
