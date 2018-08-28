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
  - Lançar um syntax error caso o `delete` não possa deletar 
  - Lançar um erro caso um objeto possua duas propriedades com  
  nomes iguais 
  - Lançar um erro caso uma função possua dois parâmetros com  
  nomes iguais 
- **Sempre utilizá-la dentro da IIFE**

# Variáveis acessíveis no console do browser
- Toda variável que retorna um valor ao ser invocada, no console  
do browser, está em escopo global 
  - `name;` 'Roger'

# `.length` - Propriedade de string
- Retorna a quantidade de caracteres de uma string [1]

[1]

```javascript
  'olá'.length
  // 3
```

# `charAt(index)` - Método de string
- Retorna o caractere do index especificado [1]
- Também funciona com a notação de array [2]
- Retorna uma string em branco, caso o index especificado não exista 

[1]

```javascript
'juhf jdfjk gikg'.charAt(1)
// 'u'
```

[2]

```javascript
'juhf jdfjk gikg'[3]
// 'f'
```

# `'string'.concat(string1, string2)` - Método de string
- Concatena quantas strings forem passadas por parâmetro [1]
- Não modifica a string original 

[1]
  
```javascript
const str1 = 'Primeira string, '
const str2 = 'segunda string, '
const str3 = 'terceira string'

str1.concat(str2, str3)
// 'Primeira string, segunda string, terceira string'
```

# `'string'.indexOf(caracter, indexStart)` - Método de string
- Retorna o index do caractere [1]
- Aceita sequência de caracteres [3]
- `indexStart`
  - Parâmetro não-obrigatório 
  - Começa a verificar à partir do index especificado [2]
- Retorna `-1`, caso o caractere não for encontrado [2]

[1]

```javascript
'hello, friend!'.indexOf('o')
// 4
```

[2]

```javascript
'hello, friend!'.indexOf('o', 5)
// -1
```

[3]

```javascript
'hello, friend!'.indexOf('friend')
// 7
```

# `'string'.lastIndexOf('string')` - Método de string
- Funciona exatamente como o `.indexOf()`, mas inicia a busca da  
direita para a esquerda 

# `'string'.replace('string', 'newString')` - Método de string
- Substitui um caractere ou um trecho de uma string por uma nova string [1]
- Em caso de substituição de caractere, substitui apenas a primeira  
ocorrência do caractere [2]
- Não modifica a string original 

[1]

```javascript
'hello, friend!'.replace('friend', 'buddy')
// 'hello, buddy!'
```

[2]

```javascript
'Mello'.replace('l', '')
// 'Melo'
```

# `'string'.slice(startIndex, finalIndex+1)` - Método de string
- Funciona como o método de array 
- Se passado apenas o parâmetro 1, retorna todos os caracteres  
à partir do índice especificado [1]
- Lembrando que, o último index não é mostrado [2]
- Não modifica a string original 

[1]

```javascript
'Roger Melo'.slice(6)
// 'Melo'
```

[2]

```javascript
'Roger Melo'.slice(6, 9)
// 'Mel'
```

# `'string'.split(separator, limit)` - Método de string
- Quebra a string e trasforma-a em um array 
- Caso nenhum parâmetro seja passado, retorna um array com a string  
inteira [1]
- Caso um parâmetro seja passado, remove a string especificada e  
retorna o array de strings [2]
- Não modifica a string original 

[1]

```javascript
'Roger Melo'.split()
// ['Roger Melo']
```

[2]

```javascript
'Roger Waters Alves de Melo'.split(' ')
// [ 'Roger', 'Waters', 'Alves', 'de', 'Melo' ]
```
