[![Curso Ninja JavaScript - Da2k](https://cloud.githubusercontent.com/assets/487669/6239059/58b94ab0-b6e7-11e4-8e5d-a5f2740870fd.png)](https://www.udemy.com/curso-javascript-ninja/?couponCode=JSNINJA)

# :books: Estudos do curso Javascript Ninja
Documentação dos estudos das aulas do [**curso JavaScript Ninja**](https://www.udemy.com/curso-javascript-ninja/?couponCode=JSNINJA), do professor [**Fernando Daciuk**](https://github.com/fdaciuk).

## Aula 20

1. #### [JS no browser - Selecionar elementos do DOM](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-20/js-no-browser-01.md)

* ##### IIFE - Passando parâmetros
* ##### if / while / for com uma linha não precisam das chaves
* ##### Métodos do Objeto window
  - ###### window.alert
  - ###### window.prompt

---

2. #### [JS no browser - parte 2](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-20/js-no-browser-02.md)

* ##### Revisando o método prompt
  - ###### Como pegar a resposta do usuário
* ##### window.confirm
* ##### window.document
* ##### DOM - Document Object Model
  - ###### Nós do DOM
* ##### Como interagir com os elementos do DOM
  - ###### document.getElementById()
  - ###### document.getElementsByClassName()
  - ###### document.getElementsByTagName()
* ##### HTMLCollection
* ##### Relembrando o arguments

---

3. #### [JS no browser - parte 3 - Selecionando elementos do DOM](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-20/js-no-browser-03.md)

* ##### document.getElementsByName()
* ##### '$' no início de variáveis
* ##### Valores mutáveis nos métodos getElement/s
* ##### querySelector() e querySelectorAll()
  - ###### Suporte para querySelector() e querySelectorAll()

---

4. #### [JS no browser - parte 4 - Formulários e Eventos](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-20/js-no-browser-04.md)

* ##### Formulários
  - ###### .value
  - ###### O método get
  - ###### Query String
* ##### Introdução à Eventos
  - ###### .addEventListener()
  - ###### .addEventListener('click')
  - ###### Prevenindo o comportamento padrão do button
  - ###### .addEventListener('submit')
  - ###### Inserindo um addEventListener() em um input
  - ###### Inserindo um addEventListener() no próprio document

---

## Aula 21

1. #### [Revisão do desafio da semana #20 - parte 01](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/01-revisao-desafio-parte-01.md)

* ##### Relembrando if's de apenas uma linha
* ##### Introdução à curto-circuito
  - ###### Curto-circuito com o `||`
  - ###### Curto-circuito com o `&&`
* ##### Pegando inputs através do type
* ##### Pegar inputs através do type não é uma boa prática

---

2. #### [Revisão do desafio da semana #20 - parte 02](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/02-revisao-desafio-parte-02.md)

* ##### Preenchendo um input com o valor entrado pelo usuário

---

3. #### [Revisão do desafio da semana #20 - parte 03](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/03-revisao-desafio-parte-03.md)

* ##### 'is' e 'has', no início de funções
* ##### Validando emails com RegExp()
  - ###### test()

---

4. #### [Sync vs. Async](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/04-sync-vs-async.md)

* ##### sync
* ##### Async
  - ###### Event Loop

---

5. #### [setTimeout()](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/05-set-time-out.md)

* ##### setTimeout() + Revisando o event loop
* ##### setInterval()
* ##### setTimeout() sendo executado várias vezes repetidas
  - ###### Pausando uma função recursiva dentro do temporizador `setTimeout`

---

6. #### [setTimeout vs. setInterval](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-21/06-settimeout-vs-setinterval.md)

* ##### setTimeout
* ##### setInterval
* ##### O atributo data-js=""
* ##### Métodos que param ou limpam o intervalo
  - ###### clearTimeout(id)
  - ###### clearInterval(id)

---

## Aula 22

1. #### [Revisão do desafio da semana #21 - Parte 1](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/01-revisao-desafio-21-parte-01.md)

* ##### Crie um arquivo index.html e adicione esse script a ele
* ##### Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero). Ele será o nosso cronômetro
* ##### Crie 3 botões para as ações do cronômetro: Start, Stop e Reset
* ##### Atributo data-js para nomear o campo e os botões
* ##### Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a cada segundo

---

2. #### [Revisão do desafio da semana #21 - Parte 2](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/02-revisao-desafio-21-parte-02.md)

* ##### O operador `+` utilizado como unário
* ##### Fazendo com que o valor do input seja incrementado a cada segundo
* ##### Ao clicar em Stop, o cronômetro deve parar de contar
* ##### Ao clicar em Reset, o cronômetro deve zerar e parar de contar
* ##### Duplicação de código e o uso de funções
* ##### Duplicação de código e o uso de funções

---

3. #### [Propriedades e métodos de funções - parte 01](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/03-prop-e-metodos-de-funcoes-01.md)

* ##### .name
* ##### .length
* ##### .toString()
* ##### .call()
* ##### .call(this)

---

4. #### [Propriedades e métodos de funções - parte 02](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/04-prop-e-metodos-de-funcoes-02.md)

* ##### .call(this, arg1, arg2, ..., argN)
* ##### .apply()
* ##### .apply(this)
* ##### .apply(this, [arg1, arg2, ..., argN])

---

5. #### [Prototype](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/05-prototype.md)

* ##### .call(this, arg1, arg2, ..., argN)
* ##### Prototype em funções
* ##### Criando propriedades depois de instanciar o objeto
* ##### Sobrescrevendo o .prototype

---

6. #### [Array-like e editorconfig](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-22/06-array-like-editor-config.md)

* ##### Array.prototype
* ##### Iterando um array-like
* ##### Especificando um segundo parâmetro para o `forEach`
* ##### Iterando o `arguments`
* ##### editorconfig
* ##### Como utilizar o editorconfig

---
