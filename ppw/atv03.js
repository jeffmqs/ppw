let palavra = window.prompt("Escreva a palavra que você deseja checar: ");
  var checagem = palavra.split("").reverse("").join("");
  if (palavra === checagem) {
    window.alert("A palavra "+ palavra+" é um palíndromo"); 
  }else{
    window.alert("A palavra "+palavra+" não é um palíndromo"); 
  }