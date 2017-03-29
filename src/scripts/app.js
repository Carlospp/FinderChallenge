/*
  main script for only runs every function
*/
searchForm();

var texto = document.getElementById("add-search").value;
var tamano = texto.length;
if (tamano => 3) {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "../books-schema.json", true);
  ajax.onload = function () {
    var list = JSON.parse(ajax.responseText).data.map(function (i) { return i.title });
    new Awesomplete(document.querySelector("#add-search"), { list: list });
  };
  ajax.send();
}


function validacion() {
  var texto = document.getElementById("add-search").value;
  var tamano = texto.length;
  var btn_buscar= document.getElementById('btn_buscar');
  if (tamano => 1) {
    btn_buscar.classList.remove('disabled');
  } else if (tamano === 0) {
    btn_buscar.classList.add('disabled');
  } else if (tamano === 3) {

  }
}
function eliminar() {
  document.getElementById("title_busqueda").innerHTML = "";
}

// para agregar busquedas ***********************************************

var app = new function () {
  this.el = document.getElementById('search');
  this.search = [];

  this.FetchAll = function () {
    var data = '';
    if (this.search.length > 0) {
      for (i = 0; i < this.search.length; i++) {
        data += '<tr>';
        data += '<td>' + this.search[i] + '<br> <a href="#" class="mostrar" onclick="app.Edit(' + i + ')">Editar</a> <a href="#" class="mostrar" onclick="app.Delete(' + i + ')">Eliminar</a>' +'</td>';
        data += '</tr>';
      }
    }
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-search');
    var txt_search = el.value;
    if (txt_search) {
      this.search.push(txt_search.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Delete = function (item) {
    this.search.splice(item, 1);
    this.FetchAll();
  };

}
app.FetchAll();
