console.log("Sanity check: scripts.js linked!");

var baseUrl = "http://www.nytimes.com/";

function Article (source, title, img, createdAt, tags, preview, webUrl) {
	this.source = source;
	this.title = title;
	this.img = img;
	this.createdAt = createdAt;
	this.tags = tags;
	this.preview = preview;
	this.webUrl = webUrl;
}

$.getJSON( "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sample-key", function(data) {
	var source,
			title,
			img,
			createdAt,
			tags,
			preview,
			webUrl;
	// console.log(data);
	var articleList = data.response.docs;
	console.log(articleList);
	for(var i = 0; i < articleList.length; i++) {
		// console.log(articleList[i].headline.main);
		source = articleList[i].source;
		title = articleList[i].headline.main;
		if (articleList[i].multimedia[0]) {
			img = baseUrl + articleList[i].multimedia[0].url;
		} else {
			img = "https://intraweb.stockton.edu/eyos/servicelearning/content/images/new-york-times-logo.jpg";
		}
		createdAt = articleList[i].pub_date;
		tags = articleList[i].section_name;
		preview = articleList[i].snippet;
		webUrl = articleList[i].web_url;
		var article = new Article(source, title, img, createdAt, tags, preview, webUrl);
		console.log(article);
		$('#news-stream').append('<a href="'+ article.webUrl + '" target=_blank><div class="card"><ul></ul><img class="article-img" src="' + article.img + '"></img><div class="title-area"><div class="title"><h2><span class="add-premium">+</span> Premium</h2><h1>'+ article.title + '</h1><div class="sub-heading"><h3>' + article.source + '</h3><h3>' + article.createdAt + '</h3></div></div></div><div class="article-tags"><span class="article-tag">' + article.tags + '</span></div><div class="text"><p>' + article.preview + '</p></div></div></a>');
	}
});

$(document).ready(function() {

	$('#edit-source').on('click', function(e){
		e.preventDefault();
		console.log("clicked edit!");
	})

});