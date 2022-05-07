var url_string = window.location.href;
var url = new URL(url_string);
var login = url.searchParams.get("login");
var favoritesParam = url.searchParams.get("favorites");
var comment = url.searchParams.get("comment");
// Bron: https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

if (login == "true") {
  $(".menu > ul > li:nth-of-type(1)").html(
    '<a href="overzicht.html?login=false">Uitloggen</a> <span>|</span>'
  );
  $(".menu > ul > li:nth-of-type(2)").html(
    '<a href="favorieten.html?favorites=true&login=true">Favorieten</a>'
  );
}

if (comment != undefined) {
  $("#comments > h2").after(
    "<article><p><strong>Anoniem:</strong> " + comment + "</p></article>"
  );
}
