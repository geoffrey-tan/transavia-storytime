for (var i = 0; i < data.length; i++) {
    $("#grid > section").after(
        "<a href=\"" + data[i].title + ".html\"><section><h1>" + data[i].title + "</h1></section></a>"
    );
}
