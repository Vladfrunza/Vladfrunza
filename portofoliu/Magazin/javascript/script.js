
function dropdownCart() {
    document.getElementById("dropdown-cart-empty").classList.toggle("show");

    window.onclick = function(event) {
      if (!event.target.matches('.fa-shopping-cart')) {
        let dropdowns = document.getElementsByClassName("dropdown-cart-empty");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  function dropdownCont() {
      document.getElementById("dropdown-cont-body").classList.toggle("show");
  }

  function contact() {
    document.getElementById("dropdown-contact").classList.toggle("show");

    window.onclick = function(event) {
      if (!event.target.matches('.contact-btn')) {
        let dropdowns = document.getElementsByClassName("dropdown-contact");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  function toggle() {
    document.getElementById("nav").classList.toggle("show");
  }

  function informatii() {
    document.getElementById("informatii-utile").classList.toggle("show");
  }

  function termeni() {
    document.getElementById("termeni-legali").classList.toggle("show");
  }

  function follow() {
    document.getElementById("follow").classList.toggle("show");
  }

  function cautare() {
    document.getElementById("dropdown-cautare").classList.toggle("show");
  }

  function profil() {
    document.getElementById("dropdown-profil").classList.toggle("show");
  }

 function shopping(){
  document.getElementById("dropdown-cumparaturi").classList.toggle("show");

  window.onclick = function(event) {
    if (!event.target.matches('.fa-shopping-cart')) {
      let dropdowns = document.getElementsByClassName("dropdown-cumparaturi");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 }

 
 function gen(){
  document.getElementById("gen").classList.toggle("show");
 }

 function culoare(){
  document.getElementById("culoare").classList.toggle("show");
 }

 function brand(){
  document.getElementById("brand").classList.toggle("show");
 }

 function cadru(){
  document.getElementById("cadru").classList.toggle("show");
 }

 function transmisie(){
  document.getElementById("transmisie").classList.toggle("show");
 }

 function frana(){
  document.getElementById("frana").classList.toggle("show");
 }

 function roata(){
  document.getElementById("roata").classList.toggle("show");
 }

 function marime(){
  document.getElementById("marime").classList.toggle("show");
 }

 function tip(){
  document.getElementById("tip").classList.toggle("show");
 }

 function nivelUtilizare(){
  document.getElementById("nivelUtilizare").classList.toggle("show");
 }

 function fuleu(){
  document.getElementById("fuleu").classList.toggle("show");
 }

 function nivelPractica(){
  document.getElementById("nivelPractica").classList.toggle("show");
 }

 function disponibil(){
  document.getElementById("disponibil").classList.toggle("show");
 }

 function talpa(){
  document.getElementById("talpa").classList.toggle("show");
 }

 function tipProdus(){
  document.getElementById("tipProdus").classList.toggle("show");
 }