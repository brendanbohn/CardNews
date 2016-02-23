console.log("Sanity check: scripts.js linked!");

function Article (title, createdAt, preview) {
	this.title = title;
	// this.createdAt = createdAt;
	// this.preview = preview;
}

$.getJSON( "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sample-key", function(data) {
	var title,
			createdAt,
			preview;
	// console.log(data);
	var articleList = data.response.docs;
	console.log(articleList);
	for(var i = 0; i < articleList.length; i++) {
		// console.log(articleList[i].headline.main);
		title = articleList[i].headline.main;
		var article = new Article(title);
		console.log(title);
	}
});