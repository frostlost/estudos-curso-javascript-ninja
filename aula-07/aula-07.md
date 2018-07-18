## `++` Pós Incremento (revisão)
- Quando declarado dentro do `console.log()`, o console  
mostra primeiro o valor e depois o incrementa 

```javascript
let counter = 20;

while(counter <= 30) {
    console.log(counter++); 
    // mostra o número no console e após mostrá-lo, o incrementa
}
```

## `switch` (revisão)
- Um `return` pode ser utilizado após o `switch`
- No exemplo abaixo, o `return` evita uma possível repetição a frase 
- Caso o `return` do `default` seja executado, o `return` após o  
`switch` não é lido 

```javascript
function showHexa(color) {
  let hexa;
  
  switch (color) {
    case 'red':
      hexa = '#ff0000';
      break;
  
    default:
      return `hexadecimal não encontrado`;
  }

  return `O hexadecimal de ${color} é ${hexa}`;
}
```

## `%` o operador módulo 
- Retorna o resto da divisão entre dois operandos 
- Retorna o valor inteiro 
- Retorna quanto sobra de uma divisão
- Vou dividir 5 carros com 2 pessoas. Dá 2 carros e meio  
para cada pessoa
- Mas não posso cortar 1 carro no meio 
- Ou seja, `5 / 2 = 2.5`
- `5 % 2 = 1` - O JS fez a divisão e verificou se existe  
algum resto 
- Todo número par tem resto `0`, quando dividido por 2 

Logando no console os números pare de 0 a 20: 

```javascript
let num = 0;

while(num <= 20) {
  num % 2 === 0 ? console.log(num++) : num++;
}

// o console primeiro mostra o valor e depois o incrementa
```

## Objetos embutidos no JS 
- Objetos embutidos no JS tem suas próprias propriedades e  
métodos 

## Mais sobre Arrays 
- Como arrays em JS são objetos disfarçados, eles possuem  
propriedades e métodos 
- O array é um exemplo de objeto embutido 

## `.length` - Propriedade
- Retorna a quantidade de itens que um array possui 

```javascript
const arr = ['melo', null, () => {}];

console.log(arr.length);
// 3
```

## `while()` e `.length` - Iterando por itens de um array 
- Pode ser usado juntamente com o `while` para iterar por  
todos os elementos de um array 
- Evita o acesso manual aos itens de um array 
- Posso, por exemplo, mostrar no console todos os itens do  
array 
- Para isso, é necessário saber a quantidade de itens do  
array 

```javascript
const arr = ['melo', null, () => {}];
let counter = 0;


while(counter < arr.length) {
  console.log(arr[counter]);
  counter++;
}

// 'melo', null, [Function]
```

- Também pode ser feito decrementando a variável 'contadora': 

```javascript
const arr = [3, 5, 'oi'];
let qtd = arr.length;

while(qtd > 0) {
  console.log(arr[--qtd]);
}
```

- Acessando a propriedade de um objeto: 

```javascript
const arr = [3, {quadro: 'vermelho'}, 'oi'];
let qtd = arr.length;

while(qtd > 0) {
  console.log(arr[--qtd]);
  if(qtd === 1)
    console.log(`valor da propriedade quadro do objeto: ${arr[qtd].quadro}`);
}
```

## `.push()` - Método
- Adiciona um item **no final** do array 
- Recebe, por parâmetro, o item a ser adicionado 
- O item pode ser qualquer tipo de valor 
- Retorna o length do array 
- Evita a necessidade de reescrever o array para adicionar um item 

```javascript
const arr = [9, 58, 'print'];

arr.push('hi!');

console.log(arr);
// [9, 58, 'print', 'hi!']
```

- Passando uma função como parâmetro 

```javascript
const arr = [9, 58, 'print'];

arr.push(num => num * 2);

console.log(arr[3](5));
// 10
```

## `for` loop
- Tem, basicamente, a mesma ideia do `while` 
- Mas, tudo o que é feito fora do while, é feito dentro da expressão do `for` 
- 1º parâmetro: Inicializador. 
  - Múltiplas variáveis podem ser inicializadas, separadas por vírgula e  
  sem o uso da palavra-chave na inicialização da segunda e seguintes  
  variáveis
- 2º parâmetro: Condição. 
- 3º parâmetro: Expressão final. 
- Os 3 parâmetros são separados por `;`

- Sintaxe: 

```javascript
for(let num = 0; num <=  20; num++) {
  console.log(num);
}
```