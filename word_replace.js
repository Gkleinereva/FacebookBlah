window.onload = function() {
	GetFeed();
}

window.onscroll = function() {
	GetFeed();
}

function GetFeed() {
	//Gets the currently loaded posts from the DOM
	let posts = document.querySelectorAll('.userContent:not([blah="true"])');
	let comments = document.querySelectorAll('.UFICommentBody:not([blah="true"])');
	setTimeout(function() {
		ReplaceWords(posts);
		ReplaceComments(comments);
	}, 500);
}

function ReplaceWords(posts) {
	var i = 0;
	while(i < posts.length) {
		posts[i].setAttribute("blah", "true");
		ChangeText(posts[i]);
		i++;
	}
}

function ChangeText(post) {
	var oldText = post.innerText;

	//This is an array of the "words" used 
	var oldTextAry = oldText.split(" ");

	//This is an array of the new "words" used
	var newTextAry = [];

	var i = 0;
	while(i < oldTextAry.length) {
		newTextAry[i] = ProcessString(oldTextAry[i]);
		i++;
	}

	var newText = newTextAry.join(" ");

	var newHTML = "<p>" + newText + "</p>";

	post.innerHTML = newHTML;
}

function ProcessString(str) {
	str = str.replace(/[a-z]+/g, "blah");
	str = str.replace(/[A-Z]+/g, "BLAH");
	str = str.replace(/[A-Z]+[a-z]+/g, "Blah");
	return str;
}

function ReplaceComments(posts) {

	var i = 0;
	while(i < posts.length) {
		posts[i].setAttribute("blah", "true");
		ChangeComments(posts[i]);
		i++;
	}
}

function ChangeComments(post) {
	var oldText = post.innerText;

	//This is an array of the "words" used 
	var oldTextAry = oldText.split(" ");

	//This is an array of the new "words" used
	var newTextAry = [];

	var i = 0;
	while(i < oldTextAry.length) {
		newTextAry[i] = ProcessString(oldTextAry[i]);
		i++;
	}

	var newText = newTextAry.join(" ");

	var newHTML = "<span>" + newText + "</span>";

	post.innerHTML = newHTML;
}