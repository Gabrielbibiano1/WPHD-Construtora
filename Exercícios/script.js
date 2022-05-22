function sorteio(){
    var min = document.getElementById("minimo").value;
    var max = document.getElementById("maximo").value;
    var minNumero = parseInt(min);
    var maxNumero = parseInt(max);
    
    const numeroAdicional = 1;
  
    let sort = Math.floor(Math.random() * (Math.floor(maxNumero) - Math.floor(minNumero) + 2));

    if(minNumero >= 1 && maxNumero > 1){
      sort = Math.floor(Math.random() * (Math.floor(maxNumero) - Math.floor(minNumero) + 2));
      if(sort == 0){
        sort += parseInt(numeroAdicional);
      }
    }else{
      sort = "Erro";
    }
    document.getElementById("resultado").innerHTML = sort;
    numerosJaSorteados();
}

function numerosJaSorteados(){
  var numeroAtual = document.getElementById("resultado").innerHTML;
  var numerosAnteriores = document.getElementById("numerosAnteriores").innerHTML;

  if(numeroAtual > 0){
    numerosAnteriores += "<li>" + numeroAtual + "<li>";
  } else if(numeroAtual == "Erro"){
    numerosAnteriores = "Vazio";
  } else{
    numerosAnteriores = "Erro";
  }
  document.getElementById("numerosAnteriores").innerHTML = numerosAnteriores;
}