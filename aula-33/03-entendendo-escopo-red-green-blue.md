# Entendendo o escopo Red - Green - Blue

## Escrevendo o teste em que uma função receba dois parâmetros e deva retornar a soma desses dois parâmetros  
Ou seja, se `1` e `5` forem passados, por exemplo, a soma desses valores deve ser retornada.  

A descrição do teste irá dizer que, quando `1` e `9` forem passados por parâmetro no `sum`, ele  
deve retornar `10`:  

![image](https://user-images.githubusercontent.com/29297788/33491686-24b49b88-d6a2-11e7-9bcf-623f86506349.png)

Então irei escrever que, eu espero que quando `sum` for executada, passando `1` e `9` por  
parâmetro, isso seja igual a `10`:  

![image](https://user-images.githubusercontent.com/29297788/33491861-a3ae2878-d6a2-11e7-9db8-9391d360a6ac.png)

Feiro isso, irei executar o mocha novamente. Ele irá dizer que tenho um teste que passou e um  
teste que falhou. O teste que falhou foi o último escrito, por que não tenho nenhum retorno na  
função. Ele disse que espera que `undefined` seja igual a `10`:  

![image](https://user-images.githubusercontent.com/29297788/33491998-fdb16894-d6a2-11e7-9092-c67076ff2575.png)

## O `return` em funções 
Quando uma função não tem retorno, ela retorna `undefined`. Por isso o teste disse que esperava  
que `undefined` fosse igual a `10`, quando, na verdade, o esperado é que `1` + `9` seja igual  
a `10`.  

Até agora, a parte red foi feita, ou seja, o teste quebrou. Agora, o green será feito, ou seja  
esse módulo deve passar no teste com o mínimo de código possível. Vou declarar então que a  
função retorne `10`:  

![image](https://user-images.githubusercontent.com/29297788/33492245-9bff7216-d6a3-11e7-8d90-f8dd988302b9.png)

Essa função deveria somar os dois valores, mas, ao invés disso, estou retornando o `10` diretamente.  
Isso é feito por que o teste está dizendo que, se `1` e `9` forem entrados, ela deve retornar `10`,  
**só que eu preciso escrever com o mínimo de código possível, ou seja, não vou escrever nenhuma  
lógica se eu sei que posso retornar `10`**. Isso é o conceito baby steps.  

Se o mocha for executado agora, esse módulo irá passar no teste:  

![image](https://user-images.githubusercontent.com/29297788/33492400-1b7fed18-d6a4-11e7-9d69-3906c7f7baaa.png)

Mas isso não significa que terminei minha implementação, ao invés disso, significa que eu ainda  
preciso fazer mais testes. 

## A documentação gerada pelos testes 
Quanto mais testes forem feitos em  uma aplicação, melhor ela irá estar documentada, pois o que o  
mocha exibe começa a se transformar em uma documentação:  

![image](https://user-images.githubusercontent.com/29297788/33492706-0bbde2bc-d6a5-11e7-89cd-56e636717be2.png)

Ou seja, ele está listando que o módulo `# SUM` deveria ser uma função e deveria retornar `10` quando  
foram passados `1` e `9`.  

## Escrevendo um teste especificando que uma função deve retornar `5` quando `2` e `3` foram passados por parâmetro 
Então, eu espero que, assim que eu executar a função `sum` e passar `2` e `3` por parâmetro,  
espero que o resultado seja `5`:  

![image](https://user-images.githubusercontent.com/29297788/33492955-d2b094b4-d6a5-11e7-9ff6-4c05a758ea9b.png)

Ao executar o mocha, esse teste irá quebrar, pois a função, atualmente, está retornando `10`. Ou  
seja, o valor esperado era `5` mas o valor retornado é `10`:  

![image](https://user-images.githubusercontent.com/29297788/33493054-19ea8664-d6a6-11e7-8b98-b7baa6a6b2f5.png)

Então, com baby steps, farei com que o módulo passe no teste. Preciso, então, passar os valores  
por parâmetro e fazer com que a função retorne a soma desses dois parâmetros. Essa é a menor  
quantidade de código que posso escrever para que esse módulo passe no teste:  

![image](https://user-images.githubusercontent.com/29297788/33493219-7a800076-d6a6-11e7-9703-ef68cb1087f4.png)

Ao executar o mocha, é exibido que o módulo passou no teste:  

![image](https://user-images.githubusercontent.com/29297788/33493247-942c3904-d6a6-11e7-87ea-641618c962fd.png)

Ele passou por que os meus testes, até agora, são: verificar se `sum` é uma função, se  
`1` e `9` são passados por parâmetro, `10` deve ser retornado e `2` e `3` deve retornar  
`5`:  

![image](https://user-images.githubusercontent.com/29297788/33493373-fb64241a-d6a6-11e7-84ed-c918eaa8949a.png)

>Lembrando que os próximos testes a serem escritos, não devem quebrar os anteriores. 

## Escrevendo um teste especificando que uma função deve retornar um erro caso receba apenas um parâmetro  

Irei então, escrever um teste para verificar se esse módulo está preparado para receber dois  
parâmetros ou não. 

![image](https://user-images.githubusercontent.com/29297788/33493531-7c8849c2-d6a7-11e7-85ec-d8a240086723.png)

Irei escrever então que, o esperado é que a invocação de `sum` com apenas um parâmetro retorne um  
erro:  

![image](https://user-images.githubusercontent.com/29297788/33493597-bfd68dec-d6a7-11e7-998e-54c41e20437e.png)

![image](https://user-images.githubusercontent.com/29297788/33493642-ddcb9734-d6a7-11e7-91fd-c3141a16456f.png)

Então, o esperado é que `NaN` seja um erro. `NaN` está sendo retornado por que apenas um parâmetro  
está sendo passado e ele está somando um parâmetro com o outro. Então, preciso escrever o mínimo  
de código possível para retornar um erro se os dois parâmetros não foram passados.  

Erei especificar então que se o parâmetro 1 ou o 2 não for passado, um erro será retornado,  
pedindo para que dois números sejam passados por parâmetro:  

![image](https://user-images.githubusercontent.com/29297788/33493789-60506aae-d6a8-11e7-9e3a-ec75e230485a.png)
