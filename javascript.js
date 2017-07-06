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



// $(document).on("click", ".movie", );

renderButtons();

});