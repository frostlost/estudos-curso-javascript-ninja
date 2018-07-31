for(let i = 0; i <= 20; i++) {
  if(i % 2 !== 0) {
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