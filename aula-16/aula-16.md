# `'use strict'` - Criação de variáveis sem o `var`
- Sintaxe: 
  - `'use strict'`
- Diretiva utilizada para: 
  - Evitar que variáveis sem a palavra-chave `var` sejam criadas  
  em escopo global
    - Diz para o browser que todo o código abaixo dela estará  
    em escopo restrito
  - Evitar o uso do `with`
    - Variáveis dentro do `with` podem se confundir com variáveis  
    externas ao `with`
  - Fazer com que, no escopo global, dentro de funções, o `this`  
  seja igual à `undefined` (`this === undefined`)
    - Ou seja, o `this` não irá representar o `window`
- Sempre utilizá-la dentro da IIFE 

# Variáveis acessíveis no console do browser
- Toda variável que retorna um valor ao ser invocada, no console  
do browser, está em escopo global 
  - `name;` 'Roger'
