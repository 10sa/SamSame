
var profile = {};
profile.displayProfiles = [];

profile.test = function(event) {
	profile.drawProfile("테스트", ["1TAG", "2TAG"], 60000, "#", "resources/images/eatjin.jpg", 10010);
}


profile.drawProfileFromJSON = function (response)
{
	response.profiles.forEach(function (value, index, array) {
		profile.drawProfile(value.profilename, value.tags, value.originfollow, value.originprofileuri, value.imageuri, value._id);
	});
}

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
	imageDiv.style = String.format("background-image:url({0}); background-size: cover;", image);
	warpperDiv.appendChild(imageDiv);
	
	var favButton = document.createElement("img");
	favButton.src = "resources/images/starline.png";
	favButton.width = "35";
	favButton.height = "35";
	favButton.style = "margin-left: 200px; margin-top: 15px;";
	favButton.profileId = id;
	favButton.addEventListener("click", function() {
		changeImage(this);
		
		if (this.isFav)
			profiles.addFavProfile(this.profileId, function() {});
		else
			profiles.deleteFavProfile(this.profileId, function() {});
	});
	
	imageDiv.appendChild(favButton);
	
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
	
	var nameSpan = document.createElement("span");
	nameSpan.style = "font-size: 22px; font-weight: 900";
	nameSpan.innerText = name;
	nameDiv.appendChild(nameSpan);
	
	nameDiv.innerHTML += ("<br>" + ((follows / 1000).toFixed(1).toString() + "k follower"));
	
	var circleAnchor = document.createElement("a");
	circleAnchor.href = link;
	infoDiv.appendChild(circleAnchor)
	
	var circleDiv = document.createElement("div");
	circleDiv.className = "circlediv";
	circleAnchor.appendChild(circleDiv);
	
	var circleImg = document.createElement("img");
	circleImg.src = "resources/images/chain.png";
	circleImg.width = "28";
	circleImg.height = "28";
	circleImg.style = "margin-right: 7px; margin-top: 7px;";
	circleDiv.appendChild(circleImg);
	
	this.displayProfiles.push(warpperDiv);
	parent.appendChild(warpperDiv);
};