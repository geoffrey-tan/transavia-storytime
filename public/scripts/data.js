var data = [];
var favorites = [];
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
    "Neerslachtig",
    "Paranoia",
    "Verrast"
];
var titlesFavorites = ["Neerslachtig", "Paranoia", "Verrast"];

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

function createTitleFavorites(title, genre, auteur, niveau, url) {
    var object = {
        title: title,
        genre: genre,
        auteur: auteur,
        niveau: niveau,
        url: url
    };

    favorites.push(object);
    return;
}

for (var i = 0; i < titles.length; i++) {
    createTitle(titles[i]);
}

for (var j = 0; j < titlesFavorites.length; j++) {
    createTitleFavorites(titlesFavorites[j]);
}
