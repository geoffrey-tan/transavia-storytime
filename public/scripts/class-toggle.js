var menu = document.querySelector(".menu");
var search = document.querySelector(".search");
var category = document.querySelector(".category");

var buttonM = document.querySelector(".menu-button");
var buttonS = document.querySelector(".search-button");
var buttonC = document.querySelector(".category-button");

var save = document.querySelectorAll(".save");
var edit = document.querySelectorAll(".edit");

var menuF = function() {
    menu.classList.toggle("menu-open"); //toggle
};

var searchF = function() {
    search.classList.toggle("search-open");
};
var categoryF = function() {
    category.classList.toggle("category-open");
};

for (var i = 0; i < save.length; i++) {
    save[i].addEventListener("click", function() {
        var children = this.children;

        for (var j = 0; j < children.length; j++) {
            if (
                children[j].nodeName == "IMG" &&
                $(children[j])
                    .attr("src")
                    .indexOf("public/icons/save.svg") != -1
            ) {
                $(".toggle-image").attr("src", "public/icons/save-a.svg");

                break;
            } else if (
                children[j].nodeName == "IMG" &&
                $(children[j])
                    .attr("src")
                    .indexOf("public/icons/save-a.svg") != -1
            ) {
                $(".toggle-image").attr("src", "public/icons/save.svg");
            }
        }
    });
}

$(".edit").click(function(event) {
    event.preventDefault();
    event.stopPropagation();
});
// Bron: https://medium.com/@jacobwarduk/how-to-correctly-use-preventdefault-stoppropagation-or-return-false-on-events-6c4e3f31aedb

for (var i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", function() {
        if (
            this.nodeName == "IMG" &&
            $(this)
                .attr("src")
                .indexOf("public/icons/edit.svg") != -1
        ) {
            $(this).attr("src", "public/icons/delete.svg");
        } else if (
            this.nodeName == "IMG" &&
            $(this)
                .attr("src")
                .indexOf("public/icons/delete.svg") != -1
        ) {
            $(this).attr("src", "public/icons/edit.svg");
        }
    });
}

buttonM.addEventListener("click", menuF); // klik functie
buttonS.addEventListener("click", searchF);
buttonC.addEventListener("click", categoryF);
