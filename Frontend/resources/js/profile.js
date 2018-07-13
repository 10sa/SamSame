
var profile = {};

/* For Testing.
window.onload = function(event) {
	profile.drawProfile("테스트", ["1TAG", "2TAG"], 60000, "#", "resources/images/eatjin.jpg");
}
*/

profile.drawProfile = function (name, tags, follows, link, image, id)
{
	var parent = document.getElementById("content-warpper");
	if (parent == undefined)
		return;
	
	var warpperDiv = document.createElement("div");
	warpperDiv.className = "centerDiv";
	warpperDiv.id = id;
	
	var imageDiv = document.createElement("div");
	imageDiv.className = "centerDiv1";
	warpperDiv.appendChild(imageDiv);
	
	var contentDiv = document.createElement("div");
	contentDiv.className = "centerDiv2";
	warpperDiv.appendChild(contentDiv);
	
	var tagDiv = document.createElement("div");
	tagDiv.className = "tagdiv";
	contentDiv.appendChild(tagDiv);
	
	var tagsP = document.createElement("p");
	tags.forEach(function (value, index, array) {
		tagsP.innerText += ("#" + value + " ");
	});
	tagsP.innerText = tagsP.innerText.trim();
	tagDiv.appendChild(tagsP);
	
	var infoDiv = document.createElement("div");
	infoDiv.className = "infodiv";
	contentDiv.appendChild(infoDiv);
	
	var nameDiv = document.createElement("div");
	nameDiv.className = "namediv";
	infoDiv.appendChild(nameDiv);
	
	var nameH2 = document.createElement("h2");
	nameH2.innerText = name;
	nameDiv.appendChild(nameH2);
	
	var followsP = document.createElement("p");
	followsP.innerText = ((follows / 1000).toFixed(1).toString() + "k follower");
	nameDiv.appendChild(followsP);
	
	var circleAnchor = document.createElement("a");
	circleAnchor.href = link;
	infoDiv.appendChild(circleAnchor)
	
	var circleDiv = document.createElement("div");
	circleDiv.className = "circlediv";
	circleAnchor.appendChild(circleDiv);
	
	parent.appendChild(warpperDiv);
};