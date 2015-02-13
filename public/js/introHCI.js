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
	var url = "/project/" + idNumber;
	console.log("Requested url is "+url);
	$.get(url, emptyCallback);
}
function emptyCallback(result){
	console.log(result);
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
	var url = "/palette";
	$.get(url, colorCallback);
}
function colorCallback(result){
	console.log(result);
	var obj = result['colors'];
	var colors = obj['hex'];
	console.log(colors);

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
}
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
	// Calls url, because needs info
	var url ="/palette";
	$.get(url,colorCallback);
}

function colorCallback(result){
	console.log(result);
	var obj = result['colors'];
	var colors = obj['hex'];
	console.log(colors);

	$('body').css('background-color',colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);




}	
