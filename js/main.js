let buttonMenu = document.querySelector(".fa-bars");
let delMenu = document.querySelector(".fa-times");
let hamMenu = document.querySelector(".hamburger-menu");

/* 
Al click sull'icona del menù (visualizzazione smartphone & tablet), la funzione sottostante 
aggiungerà la classe 'active' vicino a quella chiamata 'hamburger-menu' all'interno del file html. 
La classe active caratterizzata dalla proprietà 'display: block;' permetterà la visualizzazione del menù a scomparsa
*/
buttonMenu.addEventListener("click", function () {
  hamMenu.classList.add("active");
});

/* 
Al click sull'icona rappresentante una X, visualizzabile soltanto dopo aver aperto il menù a scomparsa (visualizzazione smartphone & tablet), 
la funzione sottostante causerà la chiusura del suddetto menu. 
*/
delMenu.addEventListener("click", function () {
  hamMenu.classList.remove("active");
});
