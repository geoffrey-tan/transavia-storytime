var data = [];
var titles = [
    "Klumperbeven",
    "Zombie",
    "Telegrafisch",
    "Zoon",
    "Vergezocht",
    "Nico Dijkshoorn",
    "Het Gebrek",
    "Martin Bril",
    "Steenkolenfrans",
    "Freudiaans",
    "Beroemd",
    "Verrassing"
];

function createTitle(title, genre, auteur, niveau, url) {
    var object = {
        title: title,
        genre: genre,
        auteur: auteur,
        niveau: niveau,
        url: url
    };

    data.push(object);
    return;
}

for (var i = 0; i < titles.length; i++) {
    createTitle(titles[i]);
}
