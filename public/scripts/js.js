var menu = document.querySelector(".menu");
var search = document.querySelector(".search");
var category = document.querySelector(".category");

var buttonM = document.querySelector(".menu-button");
var buttonS = document.querySelector(".search-button");
var buttonC = document.querySelector(".category-button");

var menuF = function() {
    menu.classList.toggle("menu-open"); //toggle
};
var searchF = function() {
    search.classList.toggle("search-open");
};
var categoryF = function() {
    category.classList.toggle("category-open");
};

buttonM.addEventListener("click", menuF); // klik functie
buttonS.addEventListener("click", searchF);
buttonC.addEventListener("click", categoryF);
