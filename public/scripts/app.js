/*
  main script for only runs every function
*/

searchForm();
var texto = document.getElementById("buscar").value;
var tamano = texto.length;
if (tamano => 3) {
  console.log("es tress");
  // document.getElementById('btn_buscar').focus();
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "../books-schema.json", true);
  ajax.onload = function () {
    var list = JSON.parse(ajax.responseText).data.map(function (i) { return i.title });
    new Awesomplete(document.querySelector("#buscar"), { list: list });
  };
  ajax.send();
}


function validacion() {
  var texto = document.getElementById("buscar").value;
  var tamano = texto.length;
  if (tamano => 1) {
    document.getElementById('btn_buscar').disabled = false;
  } else if (tamano === 0) {
    document.getElementById('btn_buscar').disabled = true;
  } else if (tamano === 3) {

  }
}
function eliminar(){
   document.getElementById("title_busqueda").innerHTML ="";
}

function guardar_busqueda() {
  var valor = document.getElementById("buscar").value;
  document.getElementById("title_busqueda").innerHTML = valor+ '<br> <a href="#" class="mostrar">Editar</a> <a href="#" class="mostrar" onclick="eliminar(this);">Eliminar</a>';
  console.log(valor);

}
