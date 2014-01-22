'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//Hide all images.
	$('.project').append("<div class='project-description'><p>Description of the project.</p></div>");
	$('.img').toggle();
	$('.project-description').toggle();

	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("We can't all be original.");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e) {
		var project = $('#project').val();
		$(project).animate( {
			width: $('#width').val()
		});

		$(project + ' .project-description').text($('#description').val());


	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var thumbnail = $(containingProject).find(".img");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.toggle();
       thumbnail.toggle();
    }
}

