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

```javascript
let myLet, myLet2 = 2, myLet3;

// 3 lets foram declaradas, usando apenas uma vez a palavra-chave let
```

```javascript
return (x++, x);
// incrementa a variável a antes de retorná-la
```