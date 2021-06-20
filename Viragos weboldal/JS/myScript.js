window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("gomb").addEventListener("click", bejelentkezes, false);
}

function bejelentkezes(){
  $("urlap").innerHTML='<p id="login">Sikeres Bejelentkezés!</p><br> <div"><a href="../index.html" id="visszaafooldalra"><p id="visszaAFoOldalra">Vissza a főoldalra</p></a></div>';
}





