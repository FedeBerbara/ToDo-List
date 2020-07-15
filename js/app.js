// Variables
let form = document.getElementById("formAgregar");
let lista = document.getElementById("items");
let filtro = document.getElementById("filter");

/*********
 * Eventos
 *********/

// Evento submit del form
form.addEventListener("submit", agregarTarea);

// Evento click para eliminar
lista.addEventListener("click", eliminarTarea);

// Evento de filtro
filtro.addEventListener("keyup", filtrarTareas);

/**********
 * Funciones
 **********/

// Funcion que agrega tareas nuevas
function agregarTarea(e) {
  e.preventDefault();
  let nuevoItem = document.getElementById("item").value;

  // Creo el tag li cuando se hace click en submit
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(nuevoItem));

  // Crea el button una vez que se hace click en submit
  let botonSupr = document.createElement("button");
  botonSupr.className = "btn btn-danger btn-sn float-right eliminar";
  botonSupr.appendChild(document.createTextNode("X"));

  //Agrego el button dentro de li
  li.appendChild(botonSupr);

  //Agrego la lista al creada al form.
  lista.appendChild(li);
}

// Funcion para eliminar un item de la lista
function eliminarTarea(e) {
  //Indico que busque si el elemento tiene la clase eliminar
  if (e.target.classList.contains("eliminar")) {
    // Confirmacion de si quiere eliminar
    if (confirm("¿ Seguro que desea eliminar esta tarea ?")) {
      // Indicamos que esta variable estamos llamando al elemento padre
      let li2 = e.target.parentElement;
      // Removemos el elemento padre
      lista.removeChild(li2);
    }
  }
}

// Funcion de filtrado
function filtrarTareas(e) {
  // Obtengo texto y lo convierno en miniscula
  let texto = e.target.value.toLowerCase();
  // Capturo todos los elementos li
  let tareas = lista.getElementsByTagName("li");

  // Lo convierto en Array y en cada uno capturo su elemento y su primer hijo
  Array.from(tareas).forEach(function (item) {
    let tareaName = item.firstChild.textContent;
    /* Con este condicional comparo si lo que estoy buscando es igual a lo que esta en la lista */
    if (tareaName.toLowerCase().indexOf(texto) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
