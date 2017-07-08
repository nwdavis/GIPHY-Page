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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        actorName + "&api_key=da1c58a5cc3c4c269de67eb540ebbd7e&limit=10";

     $.ajax({
          url: queryURL,
          method: "GET"
        })
     .done(function(response){
        var results = response.data;
        console.log(results)
        for (var i = 0; i < results.length; i++){

            var actorDiv = $("<div>");
            var rating = $("<p>").text("Rating: " + results[i].rating);
            var actorImage = $("<img>");
            actorImage.attr("src", results[i].images.fixed_height_still.url);
            actorImage.attr("data-still", results[i].images.fixed_height_still.url);
            actorImage.attr("data-animate", results[i].images.fixed_height.url);
            actorImage.attr("data-state", "still");
            actorImage.attr("class", "gif");


            actorDiv.append(rating);
            actorDiv.append(actorImage);

            $("#gifDump").prepend(actorDiv);
        };
     });
    
};


function playPause(){
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
};

$(document).on("click", ".gif", playPause);


$(document).on("click", ".actor", giphyQuery);

renderButtons();

});