'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var url="/project/" +idNumber;
	console.log("Requested url is "+url);
	
	// Main Line
	$.get(url,emptyCallback);
}


function emptyCallback(result){
	console.log(result);
	// Returns the html file, which has a list of elements
	//var projectHTML = 

	var projectHTML = '<a href="#" class="thumbnail">' + 
	    '<img src="' + result['image'] + '"class="detailsImage">' +
	    '<p>' + result['title'] + '</p>' +
	    '<p><small>' + result['date'] + '</small></p>' +
	    '<p>' + result['summary'] + '</p></a>';

	$("#project"+result['id']).find(".details").html(projectHTML);
	console.log("done");
}


/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}
