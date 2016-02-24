console.log("Sanity check: scripts.js linked!");

function Article (source, title, img, createdAt, tags, preview) {
	this.source = source;
	this.title = title;
	this.img = img;
	this.createdAt = createdAt;
	this.tags = tags;
	this.preview = preview;
}

$.getJSON( "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sample-key", function(data) {
	var source,
			title,
			createdAt,
			tags,
			preview;
	// console.log(data);
	var articleList = data.response.docs;
	console.log(articleList);
	for(var i = 0; i < articleList.length; i++) {
		// console.log(articleList[i].headline.main);
		source = articleList[i].source;
		title = articleList[i].headline.main;
		img = articleList[i].multimedia[1];
		createdAt = articleList[i].pub_date;
		tags = articleList[i].section_name;
		preview = articleList[i].snippet;
		var article = new Article(source, title, img, createdAt, tags, preview);
		console.log(article);
		$('#news-stream').append('<div class="card"><ul><li><i class="ion-ios-upload-outline right"></i></li><li><i class="ion-android-checkbox-outline right"></i></li></ul><div class="article-img"></div><div class="title"><h2><span class="add-premium">+</span> Premium</h2><h1>'+ article.title + '</h1><div class="sub-heading"><h3>' + article.source + '</h3><h3>' + article.createdAt + '</h3><div class="article-tags"><span class="article-tag">' + article.tags + '</span></div><div class="text"><p>' + article.preview + '</p></div></div>');
	}
});