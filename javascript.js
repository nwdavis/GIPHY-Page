$(document).ready(function() {

var actorList = ["Johnny Depp",
"Al Pacino",
"Robert De Niro",
"Kevin Spacey",
"Denzel Washington",
"Russell Crowe",
"Brad Pitt",
"Angelina Jolie",
"Leonardo DiCaprio",
"Tom Cruise",
"John Travolta",
"Arnold Schwarzenegger",
"Sylvester Stallone",
"Kate Winslet",
"Christian Bale",
"Morgan Freeman",
"Keanu Reeves",
"Nicolas Cage",
"Hugh Jackman",
"Edward Norton"];


function renderButtons() {

	$("#buttons").empty();

	for (var i=0; i < actorList.length; i++){

		var a = $("<button>");
          
        a.addClass("btn btn-info actor");
        a.attr("data-name", actorList[i]);
        a.text(actorList[i]);
        $("#buttons").append(a);

	};

};

$("#addActor").on("click", function(event) {
        
        event.preventDefault();
        var actor = $("#actorInput").val().trim();
        actorList.push(actor);
        renderButtons();

      });

function giphyQuery(){

    var actorName = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        actorName + "&api_key=da1c58a5cc3c4c269de67eb540ebbd7e&limit=10";

     $.ajax({
          url: queryURL,
          method: "GET"
        })
     .done(function(response){
        var results = response.data;
        for (var i = 0; i < results.length; i++){

            var actorDiv = $("<div>");
            var rating = $("<p>").text("Rating: " + results[i].rating);
            var actorImage = $("<img>");
            actorImage.attr("src", results[i].images.fixed_height.url);

            actorDiv.append(rating);
            actorDiv.append(actorImage);

            $("#gifDump").prepend(actorDiv);
        };
     });
    
};


$(document).on("click", ".actor", giphyQuery);

renderButtons();

});