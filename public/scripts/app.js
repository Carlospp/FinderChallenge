/*
  main script for only runs every function
*/

searchForm();
var ajax = new XMLHttpRequest();
ajax.open("GET", "../books-schema.json", true);
ajax.onload = function() {
	var list = JSON.parse(ajax.responseText).data.map(function(i){return i.title});
  // var list2 = list.data.map(function(i){return i.title})
	new Awesomplete(document.querySelector("#buscar"),{ list: list });
  // console.log(list.data[0].title);
};
ajax.send();


function validacion() {
  var texto = document.getElementById("buscar").value;
  var tamano = texto.length;
  if (tamano => 1) {
    document.getElementById('btn_buscar').disabled = false;
  } else if (tamano === 0) {
    document.getElementById('btn_buscar').disabled = true;
  } else if (tamano === hola) {
    console.log("holaaaaa");

  }
}