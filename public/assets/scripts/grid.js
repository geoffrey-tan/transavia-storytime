for (var i = 0; i < data.length; i++) {
  if (favoritesParam == "true") {
    $("#grid > section").after(
      '<a href="' +
        favorites[i].url +
        '.html?login=true"><section><img class="edit" src="assets/icons/edit.svg" alt="edit" /><h1>' +
        favorites[i].url +
        "</h1></section></a>"
    );
  } else if (login == "true") {
    $("#grid > section").after(
      '<a href="' +
        data[i].url +
        '.html?login=true"><section><h1>' +
        data[i].url +
        "</h1></section></a>"
    );
  } else {
    $("#grid > section").after(
      '<a href="' +
        data[i].url +
        '.html"><section><h1>' +
        data[i].url +
        "</h1></section></a>"
    );
  }
}
