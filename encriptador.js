var botonEncriptar = document.querySelector(".btn-crip");
var botonDesencriptar = document.querySelector(".btn-decrip");
var botonCopiar = document.querySelector(".btn-copy"); 
var chicoAlura = document.querySelector(".container-munieco");
var tituloTres = document.querySelector(".container-mensaje");
var textoIngresado = document.querySelector(".container-parrafo");
var resultado = document.querySelector(".container-resuelto");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    esconderMunieco();
    textoIngresado.textContent = codificar(levantarTxt());
} 
//con la función encriptar levanto el texto del textarea
//la clase "texto" hace referencia al texto que ingresa el usuario y que toma la función codificar para encriptar

 function levantarTxt(){
    var mensaje = document.querySelector(".texto");
    return mensaje.value;
}

function esconderMunieco(){
    chicoAlura.classList.add("nomostrar");
    tituloTres.classList.add("nomostrar");
}

function desencriptar(){
  textoIngresado.textContent = decodificar(levantarTxt());
} 


 function codificar(mensaje){
    var acodificar = mensaje;
    var codificado = "";

    for(var i=0; i<acodificar.length; i++){
        if(acodificar[i]=="e"){
             codificado = codificado + "enter";
        }
      else  if(acodificar[i]=="i"){
            codificado = codificado + "imes";
         }
      else  if(acodificar[i]=="a"){
          codificado = codificado + "ai";
       }
      else  if(acodificar[i]=="o"){
        codificado = codificado + "ober";
        }
      else   if(acodificar[i]=="u"){
        codificado = codificado + "ufat";
         }
      else{
        codificado = codificado + acodificar[i];
      }
      
     }
     return codificado;
  }

  //tengo que identificar donde guardo ese mensaje encriptado para levantarlo, copiarlo en el textarea y resolver (desencriptar) el código

  function copiar(){
    var codificado = document.querySelector(".container-resuelto");
    codificado.Select;
    document.ExecCommand("copy");
    alert("Texto copiado");

  }
  

  function decodificar(mensaje){
    var acodificar = mensaje;
    var codificado = "";

    for(var i=0; i<acodificar.length; i++){
        if(acodificar[i]=="e"){
             codificado = codificado + "e";
             i = i + 4;
        }
      else  if(acodificar[i]=="i"){
            codificado = codificado + "i";
            i = i + 3;
         }
      else  if(acodificar[i]=="a"){
          codificado = codificado + "a";
          i = i + 1;
       }
      else  if(acodificar[i]=="o"){
        codificado = codificado + "o";
        i = i + 3;
        }
      else   if(acodificar[i]=="u"){
        codificado = codificado + "u";
        i = i + 3;
         }
      else{
        codificado = codificado + acodificar[i];
      }
      
     }
     return codificado;
  }