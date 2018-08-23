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
  - `new Object()`
  - Criou um novo objeto na memória 
  - Esse é um construtor padrão do JS 
  - É possível criar construtores personalizados 
