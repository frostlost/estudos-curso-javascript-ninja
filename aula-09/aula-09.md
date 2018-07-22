## Escopo de funções
- **Não é** possível utilizar uma função que foi criada  
dentro de outra função
- Assim como o escopo de variáveis, o escopo de uma função  
é aquela função onde ela foi criada
- A função que está dentro de uma outra função só existe  
enquanto a função mais externa existir 

Exemplo: 

```javascript
function func1() {
  function func2() {
    return 5 + 5;
  }
  return func2();
}

func2();
// func2 is not defined
```

## Closure 
- É uma função que consegue acessar parâmetros externos à ela 

Exemplo: 

```javascript
function myFunction() {
  const num1 = 85;
  const num2 = 5;

  function sum() { // acessa valores externos. É uma closure 
    return num1 + num2; 
  }

  return sum();
}
```

## Posicionamento de variáveis no código 
- É possível que a uma função acesse variáveis que foram  
criadas abaixo dela, dentro do mesmo escopo 
- Quando uma função é criada, o JS vê que a função existe,  
mas não executa ela 
- A função só verifica as variáveis que ela acessa quando  
é executada

Exemplo: 

```javascript
function myFunction() {
  function sum() {
    return num1 + num2;
  } // leu a função mas não executou

  const num1 = 85;
  const num2 = 5;

  return sum();
}

myFunction();
// 90
```

## Hoisting e Posicionamento de funções no código 
- Se o retorno da execução de uma **função literal** ainda  
não lida é executado, a função é executada normalmente,  
pois por baixo dos panos, o JS move a criação da função  
para a parte superior do código 
  - Mas isso não acontece se a função criada depois  
  estiver atribuída a uma variável, pois o return  
  realmente irá ignorar o que estiver nas linhas de  
  baixo, caso o que estiver em baixo não seja uma  
  função literal
  - Ou seja, se o que estiver em baixo for uma variável,  
  ele irá puxá-la para a parte de cima do código e  
  atribuir `undefined` a ela 
- Funções **literais** estão disponíveis em todo o escopo  
de onde foram criadas 
- **Nunca criar uma função após um `return`**
- A ordem de criações ideal é: 1º variáveis, depois funções 

Exemplo com função literal: 

```javascript
function myFunction() {
  const num1 = 85;
  const num2 = 5;
  
  return sum(); // retornando uma função que ainda não existe
  
  function sum() {
    return num1 + num2;
  }
}

myFunction();
// 90
```

Exemplo com função atribuída a variável: 

```javascript
function myFunction() {
  const num1 = 85;
  const num2 = 5;
  
  return sum();
  
  const sum = function sum() {
    return num1 + num2;
  }
}

myFunction();
// sum is not defined
```

## Hoisting e Posicionamento de variáveis no código 
- Variáveis só estão disponíveis a partir do ponto onde é  
feita a atribuição para elas 
- O JS puxa a variável para a parte de cima do código e atribui  
`undefined` a ela 
- **Sempre declarar variáveis no início das funções** 

Exemplo com let: 

```javascript
function myFunction() {
  console.log(`antes de declarar a variável`, num1);
  let num1 = 10;
  console.log(`depois de declarar a variável`, num1);
}

myFunction();
// num1 is not defined
```

## `console.log` com parâmetros 
- É possível utilizar vírgula entre parâmetros deste método 

Exemplo: 

```javascript
console.log(`olá`, 'hi');
// 'olá' 'hi'
```