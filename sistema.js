let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  if (contador === 0) {
    console.log("O numero atual é ZERO");
  } else if (contador % 2 == 0 && contador > 5) {
    console.log("O numero " + contador + " é PAR e maior que 5");
  } else if (contador % 2 == 0) {
    console.log("O numero " + contador + " é PAR");
  } else {
    console.log("O numero " + contador + " é IMPAR");
  }
}

/*

AND (E)
true && true -> true
true && false -> false
false && true -> false
false && false -> false

OR (OU)
true || true -> true
true || false -> true
false || true -> true
false || false -> false

NOT (NÃO)
!true -> false
!false -> true


*/
