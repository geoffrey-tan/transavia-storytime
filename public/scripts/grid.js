for (var i = 0; i < data.length; i++) {
    if (favoritesParam == "true") {
        $("#grid > section").after(
            '<a href="' +
                favorites[i].title +
                '.html?login=true"><section><img class="edit" src="public/icons/edit.svg" alt="edit" /><h1>' +
                favorites[i].title +
                "</h1></section></a>"
        );
    } else if (login == "true") {
        $("#grid > section").after(
            '<a href="' + data[i].title + '.html?login=true"><section><h1>' + data[i].title + "</h1></section></a>"
        );
    } else {
        $("#grid > section").after(
            '<a href="' + data[i].title + '.html"><section><h1>' + data[i].title + "</h1></section></a>"
        );
    }
}
