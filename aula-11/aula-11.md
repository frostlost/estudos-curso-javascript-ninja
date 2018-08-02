# Acessando propriedades de objetos evitando o uso de if, switch ou ternário 
- É possível obter o valor booleano de uma tentativa  
de acesso à propriedades de objetos 
- A pergunta chave é:  
**O QUE É RETORNADO AO TENTAR ACESSAR UMA PROPRIEDADE QUE NÃO EXISTE NO OBJETO?** 

Exemplo: 

```javascript
const motoG2 = {
  '3g': `possui a propriedade 3g!`,
  'blue tooth': `sim!`
};

motoG2['4g']; // undefined

/* 
Como ele não possui a propriedade 4g, retornou undefined. 

Assim, é possível fazer com que o retorno do acesso à  
propriedade represente true ou false, passando o conversor  
booleano de valores: 

*/
const isValidProperty = prop => Boolean(prop);
const isValidProperty2 = prop => !!prop;

isValidProperty(motoG2['blue tooth']); // true
isValidProperty2(motoG2['4g']); // false
```

# Nomes de funções que retornam um valor boolean
- Por convenção, o nome desta função deve começar com 'is' ou 'has' 
  - 'is': é alguma coisa
  - 'has': tem alguma coisa 
  - `isOperatorValid`

# Nomes de funções que retornam / mostram uma mensagem 
- Por convenção, o nome desta função deve começar com 'show'
  - 'show': mostrar
  - `showOperationMessage`
  - `showErrorMessage`

# Mais sobre loops

## `do / while`
- A diferença deste laço em relação ao `while` é que  
este loop primeiro entra na instrução e só depois verifica  
se a instrução é ou não verdadeira 
  - Ele **sempre** irá executar a instrução do `do` antes do  
  `while`, mesmo se ela não condiz com a condição do parâmetro  
  do `while`
  - Sempre entra na 1ª instrução, e depois verifica se a  
  condição é ou não verdadeira 
- do: faça 
- while: enquanto 
- Necessita de uma variável contadora 
- É a única instrução dos loops e statements do JS que  
necessita do `;` 
- É o loop menos usado, mas é importante entender como ele funciona 

```javascript
let counter = 0;

do {
  console.log(counter++);
} while(counter <= 10);
// 0 a 10
```

## `for / in` - Percorrendo as propriedades de um objeto 
- Criado para **acessar o nome das propriedades de um objeto** 
- Parâmetros separados por espaço 
  1. Variável que representa a propriedade 
    1. Permite o acesso ao nome das propriedades do objeto 
  2. in
  3. objectName
- Para que **o valor da propriedade** seja acessado, é  
necessário especificar o nome do objeto, seguido da  
variável que representa a propriedade em formato de array:  
`objName[varProp]`
- Uma possível leitura: para a propriedade in objName,  
executa o bloco de código 
- É mais lento que o `for`
  - Deve ser usado com muita cautela 

```javascript
const car = {
  'brand': 'VW', 
  'color': 'black',
  'year': 2018
};

for(let prop in car) {
  console.log(prop);
}
// brand 
// color
// year
```

Acessando os valores das propriedades de um objeto: 

```javascript
const car = {
  brand: 'VW', 
  color: 'black',
  year: 2018
};

for(let prop in car) {
  console.log(car[prop]);
}

// 'VW'
// 'black'
// 2018
```

## `in`
- Operador que verifica se uma propriedade existe em  
um objeto 
- Retorna `true` ou `false`
- A propriedade deve ser espefificada como uma string 

```javascript
const car = {
  brand: 'VW', 
  color: 'black',
  year: 2018
};

console.log('brand' in car);
// true 
```

# `break`
- Também pode ser utilizado fora de instruções `switch()`
  - Em loops, por exemplo



# Saltos - `return`, `break`, `continue`
- Instruções / statements usados para **pular** algumas partes  
do código
- Exemplos 
  - `return`
    - Pula as instruções abaixo dele 
    - Em um primeiro nível de bloco, retorna o valor da função  
    e pula todo o restande do código abaixo dele, dentro da  
    função
    - Pode ser usado no meio da função 
    - Pode e deve ser usado no lugar do `else`
  - `break`
    - Pula todas as outras instruções abaixo dele 
    - Trava a execução de um bloco de instruções 
    - Joga a leitura do código pra fora da instrução 
    - Pode ser usado em um loops ou no switch 
  - `continue`
    - Ao invés de sair do bloco de instruções, pula / continua  
    para a **próxima instrução válida**
      - Dentro de um for, não executa o código abaixo dele,  
      volta pro início do for com o valor da variável contadora  
      já incrementada

Break em um loop for: 

```javascript
for(let i = 0; i <= 20; i++) {
  if(i > 10) {
    break;
  }
  console.log(i);
  // 0 até 10
}
```

Continue: 

```javascript
for(let i = 0; i <= 20; i++) {
  if(i === 10) {
    continue;
  }
  console.log(i);
  // mostrou de 0 à 9, pulou o 10, e continuou mostrando de 11 à 20
}

/* 
- Se 'i' for igual a '10', o console.log não será executado, 
a leitura do código **volta pro início do for** e incrementa 'i' 
e, portanto, mostra o valor de 'i' no console.
*/
```