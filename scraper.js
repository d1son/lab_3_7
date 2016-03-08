var request = require('request');
var cheerio = require('cheerio'); //creates DOM tree on the server


request(["https://news.ycombinator.com"], function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $(".title a").each(function(i, element){
  	var title = $(this).text();
  	var link = $(element).attr("href");
  	// var scraped = {title: title, link: link};
  	result.push(element);

    });
  console.log(result);
});