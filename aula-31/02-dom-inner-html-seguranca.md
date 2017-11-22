# DOM - innerHTML: Problemas de Segurança 

Suponhamos que um input seja disponibilizado para o usuário e, terei uma div que irá  
ser preenchida (através do innerHTML), no submit do `form`, com o que o usuário digitar:  

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/main.css">
  <title>Inner HTML</title>
</head>
<body>

  <div class="container">
    <form data-js="form" action="">
      <textarea data-js="text-area" rows="10" cols="50" type="text" autofocus></textarea>
      <button type="submit">Enviar</button>
    </form>

    <div class="main" data-js="main">
    </div>
  </div>

  <script src="js/main.js"></script>

</body>
</html>
```

```CSS
.container {
  display: flex;
}

form {
  flex-basis: 50%;
}

textarea {
  margin-bottom: 10px;
  display: block;
  font-size: 20px;
}
```

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var $form = doc.querySelector('[data-js="form"]');
  var $textArea = doc.querySelector('[data-js="text-area"]');
  var $div = doc.querySelector('[data-js="main"]');

  $form.addEventListener('submit', function(e) {
    e.preventDefault();

    $div.innerHTML = $textArea.value;
  }, false);

})(window, document);
``` 

Como o `innerHTML` converte uma string em `html`, posso fazer com que o valor do  
`textarea` seja ou uma string comum (`textNode`) ou um html:  

![image](https://user-images.githubusercontent.com/29297788/33137183-67bb4bb8-cf8e-11e7-8f0b-93814596aaf8.png)

![image](https://user-images.githubusercontent.com/29297788/33137233-8b82da16-cf8e-11e7-8779-e711345e1fce.png)

## Provocando um erro com uma imagem e um script inline 
Ou seja, se todo o html que for entrado no textarea é renderizado, posso colocar, por  
exemplo uma imagem nele:  

![image](https://user-images.githubusercontent.com/29297788/33137633-a3edc1fa-cf8f-11e7-8cba-c14bf6adad85.png)

Agora, digamos que eu insira uma imagem inválida no textarea, fazendo com que um erro  
seja gerado:  

![image](https://user-images.githubusercontent.com/29297788/33137745-eb3e6d20-cf8f-11e7-8cd6-577dfbc1adc9.png)

Posso, então, inserir um script inline na tag, usando o evento `onerror`. Este evento fará com  
que, caso aja algum erro no carregamento da imagem, um `alert()` seja executado:  

![image](https://user-images.githubusercontent.com/29297788/33137988-8ad17864-cf90-11e7-8978-94670edc23f3.png)

**Ou seja, se a entrada do usuário e inserida no código html da minha aplicação, sem tratamento,  
o usuário pode fazer qualquer tipo de script ao entrar dados. Toda entrada do usuário SEMPRE deve  
ser validada antes de ser mostrada direto na tela, tanto no front como no back-end, verificando  
a existência de tags `script`, eventos, etc.**  

**O `innerHTML` pode ser usado em casos onde apenas os responsáveis pela aplicação estejam fazendo  
a entrada de dados, e não o usuário.**

## Limpando o html da página atual com o input no textarea 
Vou fazer com que, no erro de carregamento da imagem, todo o código html interno do body do  
documento seja apagado (substituído por uma string em branco):  

![image](https://user-images.githubusercontent.com/29297788/33138394-8ab2b0ae-cf91-11e7-99d8-e649f223e1ff.png)

![image](https://user-images.githubusercontent.com/29297788/33138432-a11e01ae-cf91-11e7-848d-55b0123b5ece.png)

Ou seja, a partir disso, o usuário pode fazer o que quiser. Exemplos: fazer uma requisição  
ajax, ouvir o que está sendo digitado, inserir propagandas, ataque XSS, etc. Qualquer coisa que  
pode ser feita com JS pode ser usada nesse input para destruir a aplicação em questão. 
