$(function() {
  $("#newQuote").on("click", function() {
    $.ajax({
      method: "GET",
      url: "https://thesimpsonsquoteapi.glitch.me/quotes",
      dataType: "json"
    }).done(function(data) {
      console.log(data[0].quote);
      $("#result").html(
        "<h3><q>" + data[0].quote + "</q></h3><br>~" + data[0].character
      );
      $("#quoteImage").html("<img src=" + data[0].image + ">");
    });
  });
});
