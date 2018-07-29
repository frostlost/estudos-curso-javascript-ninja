## `{'prop': 1}` - Strings como propriedades de Objetos 
- É possível utilizar também strings como nomes de propriedades de  
objetos. Um exemplo é quando o usuário passa uma string por um  
input 
- Neste caso, para acessar a propriedade, é necessário usar o `[]`,  
pois o nome da propriedade não é um noma válido de uma variável ou  
função 
- Com objetos, é possível usar a mesma notação de array para acessar  
suas propriedades, pois o array é um objeto 
- A notação de array é usada sempre em casos em que não é possível  
saber a propriedade de um objeto, ou quando o valor dessa propriedade  
for uma string ou uma variável 


```javascript
function returnPropObj(prop) {
  let myObj = {
    'uma string': 'valor da propriedade'
  };
  
  return myObj[prop];
};

console.log(returnPropObj('uma string'));
// 'valor da propriedade'
```

## O que verdadeiramente são os arrays em JS 
- Como em JS não existem arrays, são bojetos, a forma como  
ele lê arrays é: 

```javascript
let myArr = [1, 2, 3];

let myObjArr = {
  '1': 1,
  '2': 2,
  '3': 3
};

console.log(myObjArr['3']);
// 3
```

## `,` o operador vírgula 
- Separa instruções e as une em uma única expressão 
- Pode ser usado no retorno de uma função
- Quando usado em declarações de variáveis, dificulta o  
reposicionamento delas no código 

```javascript
let myLet, myLet2 = 2, myLet3;

// 3 lets foram declaradas, usando apenas uma vez a palavra-chave let
```

```javascript
return (x++, x);
// incrementa a variável a antes de retorná-la
```

## `switch / case` - Estrutura condicional
- É mais uma forma de fazer uma estrutura condicional 
- Utiliza o operador strict equal `===` (testa o valor e o tipo) 
- A palavra chave `break` para o switch, ignorando qualquer  
outro comando abaixo dela. Caso não seja incluída, as outras  
instruções continuam a ser avaliadas, ainda que uma delas  
seja verdadeira
- Pode evitar if's cheios de `||`

Sintaxe: 

```javascript
function myFunc(x) {
  switch(x) {
    case 1: 
    console.log(`o valor de x é 1`);
    break;

    case 2: 
    console.log(`o valor de x é 2`);
    break;

    default:
    console.log(`o valor de x não é nem 1 nem 2`);
  }
}

myFunc(2);
// 'o valor de x é 2'
```

## Estruturas de repetição (loop)
- A principal diferença entre estruturas condicionais e de repetição é que,  
**enquanto a expressão a ser avaliada for verdadeira**, as linhas de  
código dentro do bloco serão executadas 

## `while`
- Enquanto a expressão passada por parênteses for true, ele executará  
o código dentro do bloco 
- Necessita de uma variável contadora 
- Se a expressão retornar false, o while irá ser finalizado 
- Um loop infinito é simplesmente um `while(true)`
- Como `0` é um valor falsy, se ele for testado como expressão no  
while, o while não será executado 
- Para fazer um contador decrescente, por exemplo, basta decrementar  
o valor numérico na expressão entre parênteses 
- Verifica o valor antes de entrar iniciar o loop 
  - Verifica antes se o valor é verdadeiro 
  - Se o valor for falso, ele não começa a ser executado 

```javascript
let counter = 0;

while(counter < 10) {
  counter++;
}

console.log(counter);
// 10
```

```javascript
let counter = 10;

while(counter !== 0) {
  counter--;
}

console.log(counter);
// 0
```

```javascript
let counter = 10;

while(counter--) { // counter também pode ser decrementado aqui
  console.log(counter);
}
```