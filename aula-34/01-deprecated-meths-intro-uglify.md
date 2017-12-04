## Deprecated Methods 
Toda linguagem possui funcionalidades que, com o tempo, podem ficar depreciadas, obsoletas,  
e serem removidas da linguagem.  

Isso pode acontecer, por exemplo, por que a forma como uma funcionalidade funciona não  
resolve mais um problema, ou até mesmo por que a forma como ela funciona está gerando  
mais problemas atualmente.  

## O exemplo da diretiva `'use strict;'` 
Ela foi criada para remover vários problemas da versão anterior do JS (es3). E códigos  
antigos, que ainda utilizam o ES3 ainda funcionam nesse formato devido a essa diretiva.  
Ela faz com que esses códigos antigos sejam entendidos pelo browser e não se quebrem.  

Também dispara errors para mostrar que há um problema ali. 

[Deprecated and obsolete features (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)

## Sobre o ES6  
O ES6 traz features novas mas, não remove a funcionalidade de nada que já existe hoje,  
no ES5. O que ele faz é, facilitar várias das coisas do ES5.  

## Performance: Uglify  
Uglify significa enfeiar o código.  

Serão removidos do código partes que a máquina não necessita para fazer a leitura, mas que  
podem deixar o código mais pesado. 
