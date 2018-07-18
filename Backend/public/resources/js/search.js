
var front_search = {};


front_search.searchFormOnKeyDown = function(isFilter)
{
	if (event.keyCode == 13)
	{
		if (isFilter)
			front_search.filterSearching();
		else
			front_search.doSearching();
	}
}
		
front_search.doSearching = function()
{
	var searchString = document.getElementById("searchForm").value;
	profile.clearProfiles();
	search.searching(searchString, function(response) {
		profile.drawProfileFromJSON(response);
	});
}

front_search.filterSearching = function()
{
	var filterValue = {};
	var searchString = document.getElementById("searchForm").value;
	var addFilterFromNode = function (node) {
		node.childNodes.forEach(function(value, index, array) {
			if (value.childNodes.length > 0)
				filterValue[value.childNodes[1].id] = value.childNodes[1].checked;
		});
	};
	
	addFilterFromNode(document.getElementById("filter:sex"));
	addFilterFromNode(document.getElementById("filter:age"));
	addFilterFromNode(document.getElementById("filter:height"));
	addFilterFromNode(document.getElementById("filter:hair"));
	addFilterFromNode(document.getElementById("filter:skin"));
	addFilterFromNode(document.getElementById("filter:mood"));
	
	console.log(filterValue);
	search.filterSearching(searchString, filterValue, function(response) {
		
	});
}

