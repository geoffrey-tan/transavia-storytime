$("#search-hero").keydown(function (event) {
  var keypressed = event.keyCode || event.which;

  if (keypressed == 13) {
    $(this).closest("form").submit();
  }
});
